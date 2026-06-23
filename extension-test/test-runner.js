"use strict";

(function () {
  const LOG_PREFIX = "[i3 Tester VERIFY]";
  const SEMANTICS_TIMEOUT_MS = 20000;
  const CLIPBOARD_MAX_CHARS = 80000;
  const DOWNLOAD_CHUNK_CHARS = 262144;
  let cachedReport = null;
  let cachedFullReportText = null;
  const interceptedApiCalls = [];
  let interceptorStatus = { checked: false, ok: false, message: "not checked" };
  let apiCaptureListenerCount = 0;

  function logVerify(category, message, data) {
    const label = LOG_PREFIX + " [" + category + "] " + message;
    if (data !== undefined) {
      console.log(label, data);
    } else {
      console.log(label);
    }
  }

  function logVerifyWarn(category, message, data) {
    const label = LOG_PREFIX + " [" + category + "] " + message;
    if (data !== undefined) {
      console.warn(label, data);
    } else {
      console.warn(label);
    }
  }

  function logVerifyError(category, message, data) {
    const label = LOG_PREFIX + " [" + category + "] " + message;
    if (data !== undefined) {
      console.error(label, data);
    } else {
      console.error(label);
    }
  }

  function getPageCspInfo() {
    const metas = Array.from(document.querySelectorAll('meta[http-equiv="Content-Security-Policy"], meta[http-equiv="content-security-policy"]'));
    const policies = metas.map(function(m) { return m.getAttribute("content") || ""; }).filter(Boolean);
    return {
      metaPolicyCount: policies.length,
      metaPolicies: policies,
      note: policies.length
        ? "Page has CSP meta tag(s) — inline script injection may be blocked"
        : "No CSP meta tags found in document (response headers not visible to extension)"
    };
  }

  function runStartupVerification() {
    console.group(LOG_PREFIX + " Startup checks (content script on " + location.href + ")");
    logVerify("init", "Content script loaded", {
      url: location.href,
      timestamp: new Date().toISOString(),
      isTopFrame: window === window.top
    });

    logVerify("clipboard", "API availability", {
      hasNavigatorClipboard: !!(navigator.clipboard),
      hasWriteText: !!(navigator.clipboard && navigator.clipboard.writeText),
      documentHasFocus: document.hasFocus(),
      visibilityState: document.visibilityState,
      isSecureContext: window.isSecureContext
    });

    logVerify("csp", "Inline script injection risk", getPageCspInfo());

    logVerify("dom", "Flutter shell present", {
      flutterView: !!document.querySelector("flutter-view"),
      semanticsHost: !!document.querySelector("flt-semantics-host"),
      textEditingHost: !!document.querySelector("flt-text-editing-host"),
      glassPane: !!document.querySelector("flt-glass-pane")
    });

    console.groupEnd();
  }

  // Inject fetch + XHR interceptor into page context so we patch Flutter's own references
  function injectFetchInterceptor() {
    if (document.getElementById("i3-fetch-interceptor")) {
      logVerify("interceptor", "Already injected — skipping duplicate script tag");
      return { alreadyPresent: true };
    }

    const cspInfo = getPageCspInfo();
    logVerify("interceptor", "Attempting page-context fetch/XHR patch", cspInfo);

    const script = document.createElement("script");
    script.id = "i3-fetch-interceptor";
    script.textContent = `(function() {
      if (window.__i3InterceptorActive) {
        window.dispatchEvent(new CustomEvent('__i3InterceptorStatus', {
          detail: { ok: true, alreadyActive: true, message: 'interceptor already active in page context' }
        }));
        return;
      }
      window.__i3InterceptorActive = true;

      // Only capture API calls — skip static assets to keep report size small
      function __i3IsAsset(url) {
        return /\.(wasm|br|ttf|otf|woff2?|eot|png|jpg|jpeg|gif|svg|ico|webp|mp4|mp3|pdf|zip)(\?|$)/i.test(url)
          || /^assets\//i.test(url)
          || /^packages\//i.test(url)
          || /gstatic\.com/i.test(url)
          || /googleapis\.com\/v1alpha/i.test(url)
          || /google\.com\/g\/collect/i.test(url);
      }

      const _fetch = window.fetch;
      window.fetch = async function(input, init) {
        const url = typeof input === 'string' ? input : (input && input.url) || '';
        const response = await _fetch.apply(this, arguments);
        if (__i3IsAsset(url)) return response;
        try {
          const contentType = response.headers.get('content-type') || '';
          const isJson = contentType.includes('application/json') || contentType.includes('text/');
          const clone = response.clone();
          clone.text().then(function(body) {
            window.dispatchEvent(new CustomEvent('__i3ApiCapture', {
              detail: {
                type: 'fetch',
                url: url,
                method: (init && init.method) || 'GET',
                requestBody: (init && init.body) ? String(init.body).slice(0, 2000) : null,
                requestHeaders: (init && init.headers) ? JSON.stringify(init.headers).slice(0, 500) : null,
                status: response.status,
                contentType: contentType,
                body: isJson ? body.slice(0, 3000) : '[binary/non-JSON skipped]',
                bodyLength: body.length,
                timestamp: new Date().toISOString()
              }
            }));
          }).catch(function(err) {
            window.dispatchEvent(new CustomEvent('__i3InterceptorStatus', {
              detail: { ok: false, stage: 'fetch-body-read', error: String(err) }
            }));
          });
        } catch(e) {
          window.dispatchEvent(new CustomEvent('__i3InterceptorStatus', {
            detail: { ok: false, stage: 'fetch-wrap', error: String(e) }
          }));
        }
        return response;
      };

      const _open = XMLHttpRequest.prototype.open;
      const _send = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.open = function(method, url) {
        this.__i3method = method;
        this.__i3url = url;
        return _open.apply(this, arguments);
      };
      XMLHttpRequest.prototype.send = function(body) {
        const self = this;
        self.addEventListener('loadend', function() {
          if (__i3IsAsset(self.__i3url || '')) return;
          try {
            const contentType = (self.getResponseHeader && self.getResponseHeader('content-type')) || '';
            const isJson = contentType.includes('application/json') || contentType.includes('text/');
            const respText = self.responseText || '';
            window.dispatchEvent(new CustomEvent('__i3ApiCapture', {
              detail: {
                type: 'xhr',
                url: self.__i3url || '',
                method: self.__i3method || 'GET',
                requestBody: body ? String(body).slice(0, 2000) : null,
                status: self.status,
                contentType: contentType,
                body: isJson ? respText.slice(0, 3000) : '[binary/non-JSON skipped]',
                bodyLength: respText.length,
                timestamp: new Date().toISOString()
              }
            }));
          } catch(e) {
            window.dispatchEvent(new CustomEvent('__i3InterceptorStatus', {
              detail: { ok: false, stage: 'xhr-capture', error: String(e) }
            }));
          }
        });
        return _send.apply(this, arguments);
      };

      window.dispatchEvent(new CustomEvent('__i3InterceptorStatus', {
        detail: {
          ok: true,
          alreadyActive: false,
          message: 'fetch and XMLHttpRequest patched in page context',
          fetchType: typeof window.fetch,
          xhrOpenType: typeof XMLHttpRequest.prototype.open
        }
      }));
    })();`;

    script.addEventListener("error", function(e) {
      interceptorStatus = { checked: true, ok: false, message: "script element error event fired" };
      logVerifyError("interceptor", "Script tag error event — injection likely blocked by CSP", e);
    });

    try {
      (document.head || document.documentElement).appendChild(script);
      logVerify("interceptor", "Script tag appended to DOM", { parent: (script.parentNode && script.parentNode.tagName) || "unknown" });
    } catch (e) {
      interceptorStatus = { checked: true, ok: false, message: String(e) };
      logVerifyError("interceptor", "Failed to append script tag", e);
      return { ok: false, error: String(e) };
    }

    return { ok: true, pendingConfirmation: true };
  }

  function listenForApiCaptures() {
    if (window.__i3ListenerActive) {
      logVerify("interceptor", "API capture listener already registered");
      return;
    }
    window.__i3ListenerActive = true;

    window.addEventListener("__i3InterceptorStatus", function(e) {
      const detail = e.detail || {};
      interceptorStatus = {
        checked: true,
        ok: !!detail.ok,
        message: detail.message || detail.error || "status event received",
        detail: detail
      };
      if (detail.ok) {
        logVerify("interceptor", "Page-context patch confirmed", detail);
      } else {
        logVerifyError("interceptor", "Page-context patch reported failure", detail);
      }
    });

    window.addEventListener("__i3ApiCapture", function(e) {
      apiCaptureListenerCount++;
      const detail = e.detail || {};
      interceptedApiCalls.push(detail);
      if (apiCaptureListenerCount === 1) {
        logVerify("interceptor", "First API call captured — bridge working", {
          type: detail.type,
          url: detail.url,
          method: detail.method,
          status: detail.status
        });
      } else if (apiCaptureListenerCount <= 5 || apiCaptureListenerCount % 25 === 0) {
        logVerify("interceptor", "API call #" + apiCaptureListenerCount, {
          type: detail.type,
          url: (detail.url || "").slice(0, 120),
          status: detail.status,
          bodyLength: detail.bodyLength
        });
      }
    });

    logVerify("interceptor", "Listening for __i3InterceptorStatus and __i3ApiCapture on window");
  }

  function logInterceptorVerificationSummary() {
    console.group(LOG_PREFIX + " Interceptor verification summary");
    console.log("Status:", interceptorStatus);
    console.log("Captured API calls so far:", interceptedApiCalls.length);
    if (!interceptorStatus.checked) {
      logVerifyWarn("interceptor", "No __i3InterceptorStatus event received yet — CSP may have blocked inline script, or script not executed");
    } else if (!interceptorStatus.ok) {
      logVerifyWarn("interceptor", "Interceptor did not confirm success — API capture may not work");
    } else if (interceptedApiCalls.length === 0) {
      logVerifyWarn("interceptor", "Interceptor active but no API calls captured yet — interact with i3 (search, History Details, Export) then run again");
    } else {
      logVerify("interceptor", "Interceptor active and capturing", { count: interceptedApiCalls.length });
    }
    console.groupEnd();
  }

  // ---- Shadow DOM full serializer ----
  function serializeShadowDOM() {
    function serializeNode(node, depth) {
      if (depth > 8) return "(max depth)";
      try {
        if (node.nodeType === Node.TEXT_NODE) {
          const t = (node.textContent || "").trim();
          return t ? t.slice(0, 200) : null;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return null;
        const tag = node.tagName.toLowerCase();
        const attrs = {};
        Array.from(node.attributes || []).forEach(function(a) {
          attrs[a.name] = a.value.slice(0, 300);
        });
        const children = [];
        node.childNodes.forEach(function(child) {
          const s = serializeNode(child, depth + 1);
          if (s) children.push(s);
        });
        const result = { tag, attrs, children };
        if (node.shadowRoot) {
          result.shadowRoot = Array.from(node.shadowRoot.childNodes).map(function(c) {
            return serializeNode(c, depth + 1);
          }).filter(Boolean);
          // Also grab raw innerHTML of shadow root for analysis
          try { result.shadowRootHTML = node.shadowRoot.innerHTML.slice(0, 50000); } catch(e) {}
        }
        return result;
      } catch(e) {
        return { error: String(e) };
      }
    }
    const root = document.documentElement;
    return serializeNode(root, 0);
  }

  function getStorageDump() {
    const local = {};
    const session = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        local[k] = (localStorage.getItem(k) || "").slice(0, 2000);
      }
    } catch(e) { local._error = String(e); }
    try {
      for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.key(i);
        session[k] = (sessionStorage.getItem(k) || "").slice(0, 2000);
      }
    } catch(e) { session._error = String(e); }
    return { localStorage: local, sessionStorage: session };
  }

  function getResourceTiming() {
    try {
      return window.performance.getEntriesByType("resource").map(function(r) {
        return {
          name: r.name,
          initiatorType: r.initiatorType,
          duration: Math.round(r.duration),
          transferSize: r.transferSize || 0,
          startTime: Math.round(r.startTime)
        };
      });
    } catch(e) { return [{ error: String(e) }]; }
  }

  function getWindowGlobals() {
    const interesting = [
      "_flutter", "flutter", "FlutterLoader", "flutterConfiguration",
      "__flutter_loader__", "Dart", "dart", "_dart_debug",
      "appConfig", "APP_CONFIG", "i3", "dims"
    ];
    const found = {};
    interesting.forEach(function(k) {
      if (window[k] !== undefined) {
        try {
          const v = window[k];
          found[k] = typeof v === "object"
            ? JSON.stringify(v).slice(0, 2000)
            : String(v).slice(0, 500);
        } catch(e) {
          found[k] = "(not serializable)";
        }
      }
    });
    // Also check for anything starting with __ that looks Flutter-related
    Object.keys(window).forEach(function(k) {
      if (k.startsWith("__flutter") || k.startsWith("_dart") || k.startsWith("__dart")) {
        try { found[k] = JSON.stringify(window[k]).slice(0, 500); } catch(e) { found[k] = "(present)"; }
      }
    });
    return found;
  }

  function getDropdownInfo() {
    // The Tag/Serial dropdown is to the left of the search proxy input
    // Try to find any semantics nodes (works if screen reader is on)
    // Also report coordinate estimate based on proxy input position
    const inputs = Array.from(document.querySelectorAll("flt-text-editing-host input.flt-text-editing"));
    const activeInput = inputs.find(function(el) { return el.offsetWidth > 0 && !el.readOnly; });

    let estimatedDropdownCoord = null;
    if (activeInput) {
      const style = activeInput.getAttribute("style") || "";
      const matrixMatch = style.match(/matrix\([\d.,\s]+,\s*([\d.]+),\s*([\d.]+)\)/);
      if (matrixMatch) {
        const flutterX = parseFloat(matrixMatch[1]);
        const flutterY = parseFloat(matrixMatch[2]);
        // Dropdown is ~80px to the left of the input field
        estimatedDropdownCoord = {
          flutterX: Math.round(flutterX - 80),
          flutterY: Math.round(flutterY),
          note: "Estimated — center of Tag/Serial dropdown based on search input at (" + Math.round(flutterX) + "," + Math.round(flutterY) + ")"
        };
      }
    }

    // Try shadow canvas click coordinates
    const shadowInfo = probeShadowDOM();
    let canvasRect = null;
    if (shadowInfo.canvases && shadowInfo.canvases.length > 0) {
      canvasRect = shadowInfo.canvases[0].rect;
    }

    // Compute screen coordinates if we have both
    let screenCoord = null;
    if (estimatedDropdownCoord && canvasRect && canvasRect.width > 0) {
      const scaleX = canvasRect.width / window.innerWidth;
      screenCoord = {
        clientX: Math.round(canvasRect.left + estimatedDropdownCoord.flutterX * scaleX),
        clientY: Math.round(canvasRect.top + estimatedDropdownCoord.flutterY * scaleX)
      };
    }

    // Check if already on Tag/Serial (value of active input may hint)
    const dropdownSemantics = findSemantics("Tag/Serial");
    const nameSemantics = findSemantics("Name");
    const idSemantics = findSemantics("Id");

    return {
      estimatedDropdownCoord,
      canvasRect,
      screenCoord,
      semanticsTagSerial: dropdownSemantics.length,
      semanticsName: nameSemantics.length,
      semanticsId: idSemantics.length,
      activeInputPosition: activeInput ? (function() {
        const style = activeInput.getAttribute("style") || "";
        const m = style.match(/matrix\([^)]+\)/);
        return m ? m[0] : null;
      })() : null,
      note: dropdownSemantics.length > 0
        ? "Tag/Serial found in semantics — screen reader must be active"
        : "No semantics. Use coordinate click at estimatedDropdownCoord, or use API search directly with mode=Tag%2FSerial in URL"
    };
  }

  async function runFullDump() {
    injectFetchInterceptor();
    listenForApiCaptures();

    const framework = detectFramework();
    const shadowDOMTree = serializeShadowDOM();
    const storageDump = getStorageDump();
    const resourceTiming = getResourceTiming();
    const windowGlobals = getWindowGlobals();
    const shadowInfo = probeShadowDOM();
    const liveElements = collectLiveElements();
    const dropdownInfo = getDropdownInfo();

    // Wait a moment to see if any pending API calls complete
    await new Promise(function(r) { setTimeout(r, 500); });

    const dump = {
      timestamp: new Date().toISOString(),
      url: location.href,
      hash: location.hash,
      title: document.title,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      framework: framework,
      dropdownInfo: dropdownInfo,
      liveElementCounts: liveElements.counts,
      shadowDOM: shadowInfo,
      textEditingInputs: liveElements.textEditingInputs,
      flutterShell: liveElements.flutterShell,
      windowGlobals: windowGlobals,
      storage: storageDump,
      resourceTiming: resourceTiming,
      interceptedApiCalls: interceptedApiCalls.slice(),
      shadowDOMTree: shadowDOMTree,
      documentHTML: document.documentElement.outerHTML.slice(0, 100000),
      note: "Intercepted API calls only include calls made AFTER the extension was loaded. Navigate, interact, then run Full Dump again to capture more calls."
    };

    const text = JSON.stringify(dump, null, 2);
    let savedFile = null;
    let copied = false;
    let clipboardMethod = null;
    try {
      savedFile = await saveReportToFile(text, "i3-full-dump", false);
    } catch (e) {
      logVerifyError("download", "Full dump file save failed", e.message || String(e));
    }
    try {
      const copyResult = await maybeCopySmallSummary(text);
      if (copyResult && copyResult.ok) {
        copied = true;
        clipboardMethod = copyResult.method;
      }
    } catch (e) {
      logVerifyError("clipboard", "Full dump copy skipped/failed", e.message || String(e));
    }

    logInterceptorVerificationSummary();

    // Console output
    console.log("%c=== i3 FULL SITE DUMP ===", "font-weight:bold;font-size:14px;color:#073772;");
    console.log("URL:", dump.url, "| Time:", dump.timestamp);
    console.log("Framework:", framework);
    console.log("Dropdown info:", dropdownInfo);
    console.group("Storage");
    console.log("localStorage keys:", Object.keys(storageDump.localStorage));
    console.log("sessionStorage keys:", Object.keys(storageDump.sessionStorage));
    console.log(storageDump);
    console.groupEnd();
    console.group("Window globals (Flutter-related)");
    console.log(windowGlobals);
    console.groupEnd();
    console.group("Resource timing (" + resourceTiming.length + " requests)");
    console.table(resourceTiming.filter(function(r) { return r.initiatorType !== "script"; }));
    console.groupEnd();
    console.group("All network requests (including scripts)");
    console.table(resourceTiming);
    console.groupEnd();
    console.group("Shadow DOM (flt-glass-pane.shadowRoot)");
    console.log(shadowInfo);
    console.groupEnd();
    console.group("Intercepted API calls (" + interceptedApiCalls.length + ")");
    if (interceptedApiCalls.length) {
      console.table(interceptedApiCalls.map(function(c) {
        return { type: c.type, url: c.url, method: c.method, status: c.status, bodyLength: c.bodyLength, time: c.timestamp };
      }));
      interceptedApiCalls.forEach(function(c) {
        console.group(c.method + " " + c.url.slice(0, 80));
        if (c.requestBody) console.log("Request:", c.requestBody);
        console.log("Response (" + c.bodyLength + " bytes):", c.body ? c.body.slice(0, 5000) : "(empty)");
        console.groupEnd();
      });
    } else {
      console.log("None. Interact with i3 (search, open device, click History Details, click Export) — calls are captured live. Run Full Dump again.");
    }
    console.groupEnd();
    console.group("Text editing proxy inputs");
    console.table(liveElements.textEditingInputs);
    console.groupEnd();
    console.group("FULL DUMP JSON (" + text.length + " chars" +
      (savedFile && savedFile.ok ? " — saved to " + savedFile.filename : " — file save failed") +
      (copied ? " — small copy via " + (clipboardMethod || "?") : "") + ")");
    console.log(text);
    console.groupEnd();
    console.log("%c=== END DUMP ===", "font-weight:bold;color:#073772;");

    // Banner
    const banner = document.createElement("div");
    banner.style.cssText = "position:fixed;top:12px;right:12px;z-index:2147483647;background:#073772;color:#fff;font:bold 13px Arial,sans-serif;padding:10px 14px;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.25);max-width:340px;line-height:1.4;";
    banner.textContent = "i3 Dump: " + text.length + " chars" +
      (savedFile && savedFile.ok ? " — saved " + savedFile.filename : " — save failed, see console") +
      (copied ? " (small copy)" : "");
    document.body.appendChild(banner);
    setTimeout(function() { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 12000);

    return {
      ok: true,
      savedFile: savedFile,
      copied: copied,
      clipboardMethod: clipboardMethod,
      length: text.length,
      apiCallCount: interceptedApiCalls.length,
      interceptorStatus: interceptorStatus
    };
  }

  // Force Flutter to populate its semantics/accessibility tree by:
  // 1. Clicking the hidden "Enable accessibility" button Flutter injects in its shadow DOM
  // 2. Dispatching the keyboard shortcut Flutter Web listens for (Tab key while glass pane is focused)
  // 3. Calling the window._flutter_internal_accessibility toggle if present
  // Returns { method, success, nodeCountBefore, nodeCountAfter, message }
  async function enableSemantics() {
    const host = document.querySelector("flt-semantics-host");
    const nodeCountBefore = host ? host.childNodes.length : 0;
    logVerify("semantics", "Attempting to force-enable Flutter semantics", { nodeCountBefore });

    // Method 1: hidden "Enable accessibility" button inside flt-glass-pane shadow DOM
    const glassPane = document.querySelector("flt-glass-pane");
    const shadow = glassPane && glassPane.shadowRoot;
    if (shadow) {
      const btns = Array.from(shadow.querySelectorAll("button, [role='button']"));
      logVerify("semantics", "Shadow DOM buttons found", btns.map(function(b) {
        return { tag: b.tagName, text: b.textContent.trim().slice(0, 80), role: b.getAttribute("role") };
      }));
      const accessBtn = btns.find(function(b) {
        const t = b.textContent.toLowerCase();
        return t.includes("accessib") || t.includes("enable");
      });
      if (accessBtn) {
        logVerify("semantics", "Found accessibility button — clicking", accessBtn.textContent.trim());
        accessBtn.click();
        await new Promise(function(r) { setTimeout(r, 1500); });
        const countAfter = host ? host.childNodes.length : 0;
        if (countAfter > 0) {
          logVerify("semantics", "SUCCESS via shadow button — semantics nodes: " + countAfter);
          return { method: "shadow-button", success: true, nodeCountBefore, nodeCountAfter: countAfter };
        }
      }
    }

    // Method 2: Flutter Web listens for Tab key focus on the glass pane area to offer accessibility
    if (glassPane) {
      glassPane.focus && glassPane.focus();
      glassPane.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", keyCode: 9, bubbles: true }));
      await new Promise(function(r) { setTimeout(r, 500); });
    }

    // Method 3: window._flutter or window.flutterCanvasKit accessibility toggle
    try {
      if (window._flutter && window._flutter.loader) {
        logVerify("semantics", "window._flutter.loader found", Object.keys(window._flutter));
      }
      // Some Flutter builds expose this
      if (window.flutter_state && window.flutter_state.accessibilityEnabled !== undefined) {
        window.flutter_state.accessibilityEnabled = true;
      }
    } catch(e) { logVerifyWarn("semantics", "Method 3 error", String(e)); }

    // Method 4: synthesise the aria-live / role=application focus pattern that screen readers use
    const appRoot = document.querySelector("flutter-view") || document.body;
    appRoot.setAttribute("aria-live", "assertive");
    appRoot.setAttribute("role", "application");
    document.dispatchEvent(new CustomEvent("flutter-accessibility-enabled", { bubbles: true }));
    document.dispatchEvent(new Event("flutter-semantics-update", { bubbles: true }));
    await new Promise(function(r) { setTimeout(r, 2000); });

    const nodeCountAfter = host ? host.childNodes.length : 0;
    const success = nodeCountAfter > 0;
    if (success) {
      logVerify("semantics", "SUCCESS via event dispatch — semantics nodes: " + nodeCountAfter);
    } else {
      logVerifyWarn("semantics", "All methods tried — semantics still empty. Flutter may require real screen-reader UA or explicit Dart call.", { nodeCountAfter });
    }
    return { method: "events", success, nodeCountBefore, nodeCountAfter, message: success ? "semantics enabled" : "semantics still empty after all attempts" };
  }

  async function runEnableSemantics() {
    logVerify("semantics", "=== ENABLE SEMANTICS REQUESTED ===");
    const result = await enableSemantics();

    // Walk the semantics tree and report all nodes if successful
    let nodes = [];
    if (result.success) {
      const host = document.querySelector("flt-semantics-host");
      nodes = Array.from(host.querySelectorAll("*")).map(function(el) {
        const rect = el.getBoundingClientRect();
        return {
          tag: el.tagName.toLowerCase(),
          role: el.getAttribute("role"),
          label: el.getAttribute("aria-label"),
          text: el.textContent.trim().slice(0, 100),
          id: el.id || null,
          rect: { top: Math.round(rect.top), left: Math.round(rect.left), w: Math.round(rect.width), h: Math.round(rect.height) }
        };
      }).filter(function(n) { return n.label || n.text || n.role; });
      logVerify("semantics", "Semantics nodes found: " + nodes.length, nodes.slice(0, 30));
    }

    browser.runtime.sendMessage({
      type: "semantics_result",
      result: result,
      nodeCount: nodes.length,
      nodes: nodes.slice(0, 50)
    }).catch(function() {});
  }

  function probeShadowDOM() {
    const result = {
      glassPaneHasShadow: false,
      canvasCount: 0,
      canvases: [],
      shadowChildren: []
    };
    const glassPane = document.querySelector("flt-glass-pane");
    if (!glassPane) return result;
    const shadow = glassPane.shadowRoot;
    if (!shadow) return result;
    result.glassPaneHasShadow = true;
    const canvases = Array.from(shadow.querySelectorAll("canvas"));
    result.canvasCount = canvases.length;
    result.canvases = canvases.map(function(c) {
      const rect = c.getBoundingClientRect();
      return {
        tag: "canvas",
        id: c.id || null,
        classes: c.className || null,
        width: c.width,
        height: c.height,
        intrinsicWidth: c.style.width,
        intrinsicHeight: c.style.height,
        rect: {
          top: Math.round(rect.top), left: Math.round(rect.left),
          width: Math.round(rect.width), height: Math.round(rect.height)
        },
        attributes: (function() {
          const a = {}; Array.from(c.attributes).forEach(function(x) { a[x.name] = x.value; }); return a;
        })()
      };
    });
    result.shadowChildren = Array.from(shadow.children).map(function(el) {
      return { tag: el.tagName.toLowerCase(), id: el.id, class: el.className };
    });
    return result;
  }
  const FLUTTER_TAGS = [
    "flt-semantics",
    "flt-semantics-scroll-overflow",
    "flt-text-editing-host",
    "flutter-view",
    "flt-glass-pane",
    "flt-platform-view"
  ];

  function getSemanticsHost() {
    return document.querySelector("flt-semantics-host");
  }

  function getAllAttributes(el) {
    const out = {};
    Array.from(el.attributes).forEach(function (attr) {
      out[attr.name] = attr.value;
    });
    return out;
  }

  function buildSelectorHints(el) {
    const hints = [];
    const tag = el.tagName.toLowerCase();
    const id = el.id;
    const ariaLabel = el.getAttribute("aria-label");
    const role = el.getAttribute("role");

    if (id) {
      hints.push("#" + CSS.escape(id));
    }
    if (ariaLabel && role) {
      hints.push(tag + '[aria-label="' + ariaLabel.replace(/"/g, '\\"') + '"][role="' + role + '"]');
    }
    if (ariaLabel) {
      hints.push(tag + '[aria-label="' + ariaLabel.replace(/"/g, '\\"') + '"]');
    }
    if (role) {
      hints.push(tag + '[role="' + role + '"]');
    }
    if (el.className && typeof el.className === "string" && el.className.trim()) {
      el.className.trim().split(/\s+/).forEach(function (cls) {
        hints.push(tag + "." + CSS.escape(cls));
      });
    }
    return hints;
  }

  function describeElement(el, meta) {
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    return {
      index: meta.index,
      treePath: meta.treePath,
      depth: meta.depth,
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      classes: el.className && typeof el.className === "string" ? el.className.trim() : null,
      attributes: getAllAttributes(el),
      ariaLabel: el.getAttribute("aria-label"),
      role: el.getAttribute("role"),
      ariaChecked: el.getAttribute("aria-checked"),
      ariaSelected: el.getAttribute("aria-selected"),
      ariaExpanded: el.getAttribute("aria-expanded"),
      tabIndex: el.getAttribute("tabindex"),
      value: el.value !== undefined ? el.value : null,
      readonly: el.readOnly === true,
      textContent: (el.textContent || "").trim().slice(0, 300),
      innerText: (el.innerText || "").trim().slice(0, 300),
      visible: rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none",
      onScreen: rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth,
      rect: {
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        bottom: Math.round(rect.bottom),
        right: Math.round(rect.right)
      },
      selectorHints: buildSelectorHints(el)
    };
  }

  function walkSemanticsTree(host, depth, path, out, counter) {
    if (!host) {
      return counter;
    }
    const children = Array.from(host.children);
    children.forEach(function (child, i) {
      const childPath = path + "/" + child.tagName.toLowerCase() + "[" + i + "]";
      if (child.tagName === "FLT-SEMANTICS" || child.tagName === "FLT-SEMANTICS-SCROLL-OVERFLOW") {
        out.push(describeElement(child, {
          index: counter.index++,
          treePath: childPath,
          depth: depth
        }));
      }
      counter.index = walkSemanticsTree(child, depth + 1, childPath, out, counter);
    });
    return counter.index;
  }

  function collectLiveElements() {
    const semanticsTree = [];
    const counter = { index: 0 };
    const host = getSemanticsHost();
    if (host) {
      walkSemanticsTree(host, 0, "flt-semantics-host", semanticsTree, counter);
    }

    const textInputs = Array.from(document.querySelectorAll("flt-text-editing-host input.flt-text-editing")).map(function (el, i) {
      return describeElement(el, {
        index: i,
        treePath: "flt-text-editing-host/input[" + i + "]",
        depth: 2
      });
    });

    const scrollContainers = Array.from(document.querySelectorAll("flt-semantics-scroll-overflow")).map(function (el, i) {
      return describeElement(el, {
        index: i,
        treePath: "flt-semantics-scroll-overflow[" + i + "]",
        depth: 1
      });
    });

    const canvases = Array.from(document.querySelectorAll("flutter-view canvas, canvas")).map(function (el, i) {
      return describeElement(el, {
        index: i,
        treePath: "canvas[" + i + "]",
        depth: 1
      });
    });

    const flutterShell = Array.from(document.querySelectorAll("flutter-view, flt-glass-pane, flt-semantics-host, flt-text-editing-host")).map(function (el, i) {
      return describeElement(el, {
        index: i,
        treePath: el.tagName.toLowerCase() + "[" + i + "]",
        depth: 0
      });
    });

    const allSemantics = semanticsTree.slice();
    const buttons = allSemantics.filter(function (e) { return e.role === "button"; });
    const checkboxes = allSemantics.filter(function (e) { return e.role === "checkbox"; });
    const tabs = allSemantics.filter(function (e) { return e.role === "tab"; });
    const textFields = allSemantics.filter(function (e) { return e.role === "textbox" || e.role === "searchbox"; });
    const links = allSemantics.filter(function (e) { return e.role === "link"; });

    const labelIndex = {};
    allSemantics.forEach(function (e) {
      const label = e.ariaLabel;
      if (!label) {
        return;
      }
      if (!labelIndex[label]) {
        labelIndex[label] = [];
      }
      labelIndex[label].push({
        index: e.index,
        role: e.role,
        visible: e.visible,
        rect: e.rect,
        treePath: e.treePath
      });
    });

    const uniqueAriaLabels = Object.keys(labelIndex).sort();
    const uniqueRoles = Array.from(new Set(allSemantics.map(function (e) { return e.role; }).filter(Boolean))).sort();

    return {
      counts: {
        semanticsNodes: allSemantics.length,
        buttons: buttons.length,
        checkboxes: checkboxes.length,
        tabs: tabs.length,
        textFields: textFields.length,
        links: links.length,
        textEditingInputs: textInputs.length,
        scrollContainers: scrollContainers.length,
        canvases: canvases.length
      },
      semanticsTree: allSemantics,
      buttons: buttons,
      checkboxes: checkboxes,
      tabs: tabs,
      textFields: textFields,
      links: links,
      textEditingInputs: textInputs,
      scrollContainers: scrollContainers,
      canvases: canvases,
      flutterShell: flutterShell,
      uniqueAriaLabels: uniqueAriaLabels,
      uniqueRoles: uniqueRoles,
      labelIndex: labelIndex
    };
  }

  function detectFramework() {
    const body = document.body;
    const host = getSemanticsHost();
    return {
      renderer: body ? body.getAttribute("flt-renderer") : null,
      buildMode: body ? body.getAttribute("flt-build-mode") : null,
      embedding: body ? body.getAttribute("flt-embedding") : null,
      hasFlutterView: !!document.querySelector("flutter-view"),
      semanticsHostPresent: !!host,
      semanticsHostChildCount: host ? host.childNodes.length : 0,
      semanticsHostInnerHTMLLength: host ? host.innerHTML.length : 0,
      documentTitle: document.title,
      hashRoute: location.hash,
      viewport: { width: window.innerWidth, height: window.innerHeight }
    };
  }

  function waitForSemantics(timeoutMs) {
    return new Promise(function (resolve) {
      const host = getSemanticsHost();
      if (host && host.childNodes.length > 0) {
        resolve({ ready: true, childCount: host.childNodes.length, waitedMs: 0 });
        return;
      }

      const start = Date.now();
      let settled = false;
      const finish = function (ready, childCount) {
        if (settled) {
          return;
        }
        settled = true;
        observer.disconnect();
        clearTimeout(timer);
        resolve({
          ready: ready,
          childCount: childCount || 0,
          waitedMs: Date.now() - start
        });
      };

      const observer = new MutationObserver(function () {
        const h = getSemanticsHost();
        if (h && h.childNodes.length > 0) {
          finish(true, h.childNodes.length);
        }
      });

      if (host) {
        observer.observe(host, { childList: true, subtree: true, attributes: true });
      }
      observer.observe(document.documentElement, { childList: true, subtree: true });

      const timer = setTimeout(function () {
        const h = getSemanticsHost();
        finish(false, h ? h.childNodes.length : 0);
      }, timeoutMs);
    });
  }

  function findSemantics(label, role) {
    const host = getSemanticsHost();
    if (!host) {
      return [];
    }

    const escaped = CSS.escape(label);
    let nodes = Array.from(host.querySelectorAll('flt-semantics[aria-label="' + escaped + '"]'));
    if (role) {
      nodes = nodes.filter(function (n) {
        return n.getAttribute("role") === role;
      });
    }
    if (nodes.length > 0) {
      return nodes;
    }

    const labelLower = label.toLowerCase();
    return Array.from(host.querySelectorAll("flt-semantics")).filter(function (n) {
      const ariaLabel = (n.getAttribute("aria-label") || "").toLowerCase();
      const roleOk = !role || n.getAttribute("role") === role;
      return roleOk && ariaLabel.indexOf(labelLower) !== -1;
    });
  }

  function findLabelVariants(variants, role) {
    const hits = [];
    variants.forEach(function (label) {
      const nodes = findSemantics(label, role);
      if (nodes.length > 0) {
        hits.push({ label: label, count: nodes.length, elements: nodes.map(function (n) {
          return describeElement(n, { index: -1, treePath: "(target match)", depth: -1 });
        }) });
      }
    });
    return hits;
  }

  function makeResult(id, name, selector, found, count, stability, notes, warn, matches) {
    return {
      id: id,
      name: name,
      selector: selector,
      found: found,
      count: count,
      stability: stability || "FRAGILE",
      notes: notes || "",
      warn: !!warn,
      liveMatches: matches || []
    };
  }

  function shouldRun(scope, section) {
    return scope === "all" || scope === section;
  }

  function runReportsTests(tests, live) {
    const sitenameVariants = ["Select Sitename", "Select site name", "Search by sitename", "Sitename"];
    const sitenameHits = findLabelVariants(sitenameVariants);
    const nodes1 = sitenameHits.length ? sitenameHits[0] : null;
    tests.push(makeResult(
      1,
      "Site/Location filter dropdown opener",
      'flt-semantics[aria-label="Select Sitename"] (+ variants)',
      sitenameHits.length > 0,
      sitenameHits.reduce(function (n, h) { return n + h.count; }, 0),
      "FRAGILE",
      sitenameHits.length
        ? "Matched labels: " + sitenameHits.map(function (h) { return h.label + "(" + h.count + ")"; }).join(", ")
        : "Not found. Open Sitename filter dropdown first. All labels on page: " + live.uniqueAriaLabels.slice(0, 40).join(", "),
      false,
      sitenameHits
    ));

    const trcVariants = ["Technology Repair Center", "TECHNOLOGY REPAIR CENTER", "Technology Repair"];
    const trcHits = [];
    live.checkboxes.forEach(function (cb) {
      const label = (cb.ariaLabel || "").toLowerCase();
      if (label.indexOf("technology repair") !== -1) {
        trcHits.push(cb);
      }
    });
    tests.push(makeResult(
      2,
      "Technology Repair Center checkbox",
      'flt-semantics[role="checkbox"][aria-label*="Technology Repair"]',
      trcHits.length > 0,
      trcHits.length,
      "FRAGILE",
      trcHits.length
        ? "Found: " + trcHits.map(function (c) { return c.ariaLabel; }).join(", ")
        : "Not found. All checkboxes: " + (live.checkboxes.map(function (c) { return c.ariaLabel || "(no label)"; }).join(", ") || "(none)"),
      false,
      trcHits
    ));

    const doneHits = findLabelVariants(["Done", "Apply"], "button");
    const doneCount = doneHits.reduce(function (n, h) { return n + h.count; }, 0);
    tests.push(makeResult(
      3,
      "Done / Apply button",
      'flt-semantics[aria-label="Done"][role="button"]',
      doneCount > 0,
      doneCount,
      "FRAGILE",
      doneCount > 1 ? "WARNING: " + doneCount + " Done/Apply buttons" : (doneCount ? "OK" : "Not found"),
      doneCount > 1,
      doneHits
    ));

    const searchHits = findLabelVariants(["Search"], "button");
    const searchCount = searchHits.reduce(function (n, h) { return n + h.count; }, 0);
    tests.push(makeResult(
      4,
      "Search button",
      'flt-semantics[aria-label="Search"][role="button"]',
      searchCount > 0,
      searchCount,
      "FRAGILE",
      searchCount ? "Matched: " + searchHits.map(function (h) { return h.label + "(" + h.count + ")"; }).join(", ") : "Not found",
      searchCount > 1,
      searchHits
    ));

    const downloadVariants = ["Download Report", "Download as Report", "Export", "Export CSV", "Export Data"];
    const downloadHits = findLabelVariants(downloadVariants, "button");
    const downloadCount = downloadHits.reduce(function (n, h) { return n + h.count; }, 0);
    tests.push(makeResult(
      5,
      "Download / Export button",
      'flt-semantics[aria-label="Download Report"][role="button"] (+ fallbacks)',
      downloadCount > 0,
      downloadCount,
      "FRAGILE",
      downloadCount
        ? "Matched: " + downloadHits.map(function (h) { return h.label + "(" + h.count + ")"; }).join(", ")
        : "Not found. Button labels on page: " + live.buttons.map(function (b) { return b.ariaLabel; }).filter(Boolean).join(", "),
      downloadCount > 0 && !downloadHits.some(function (h) { return h.label === "Download Report"; }),
      downloadHits
    ));
  }

  function runSearchTests(tests, live) {
    const modeHits = findLabelVariants(["Tag/Serial", "Tag / Serial", "Serial", "Tag"]);
    const modeCount = modeHits.reduce(function (n, h) { return n + h.count; }, 0);
    tests.push(makeResult(
      6,
      "Search mode dropdown (Tag/Serial)",
      'flt-semantics[aria-label="Tag/Serial"]',
      modeCount > 0,
      modeCount,
      "FRAGILE",
      modeCount ? "Matched: " + modeHits.map(function (h) { return h.label + "(" + h.count + ")"; }).join(", ") : "Not found",
      false,
      modeHits
    ));

    const inputs = live.textEditingInputs;
    const editable = inputs.filter(function (i) { return !i.readonly; });
    tests.push(makeResult(
      7,
      "Search input field",
      "flt-text-editing-host input.flt-text-editing:not([readonly])",
      editable.length > 0,
      editable.length,
      "FRAGILE",
      "Non-readonly: " + editable.length + "; total proxy inputs: " + inputs.length,
      editable.length > 1,
      editable
    ));

    const autocompleteButtons = live.buttons.filter(function (b) {
      return b.ariaLabel && b.ariaLabel.length > 2;
    });
    tests.push(makeResult(
      8,
      "Device result row (autocomplete)",
      'flt-semantics[role="button"] (after typing search)',
      false,
      autocompleteButtons.length,
      "FRAGILE",
      "Type a tag/serial first, then re-run. Current labeled buttons: " + autocompleteButtons.slice(0, 10).map(function (b) { return b.ariaLabel; }).join(", "),
      true,
      autocompleteButtons.slice(0, 20)
    ));
  }

  function runHistoryTests(tests, live) {
    const tabHits = findLabelVariants(["History Details", "History"]);
    const tabCount = tabHits.reduce(function (n, h) { return n + h.count; }, 0);
    tests.push(makeResult(
      9,
      "History Details tab",
      'flt-semantics[aria-label="History Details"]',
      tabCount > 0,
      tabCount,
      "FRAGILE",
      tabCount ? "Matched: " + tabHits.map(function (h) { return h.label + "(" + h.count + ")"; }).join(", ") : "Not found. Tabs on page: " + live.tabs.map(function (t) { return t.ariaLabel; }).join(", "),
      false,
      tabHits
    ));

    tests.push(makeResult(
      10,
      "History table container",
      "flt-semantics-scroll-overflow",
      live.scrollContainers.length > 0,
      live.scrollContainers.length,
      "FRAGILE",
      live.scrollContainers.length ? "Scroll containers found" : "Not found — open History Details tab",
      false,
      live.scrollContainers
    ));

    const datePattern = /\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}/;
    const dateNodes = live.semanticsTree.filter(function (e) {
      return datePattern.test(e.ariaLabel || "");
    });
    tests.push(makeResult(
      11,
      "History table row (date pattern)",
      "semantics aria-label matching MM-dd-yyyy HH:mm",
      dateNodes.length > 0,
      dateNodes.length,
      "FRAGILE",
      dateNodes.length
        ? "Samples: " + dateNodes.slice(0, 5).map(function (e) { return e.ariaLabel; }).join("; ")
        : "No date rows visible",
      false,
      dateNodes.slice(0, 20)
    ));

    const headers = ["Date", "Assigned To", "Device At", "Break Name", "Site", "Device Status", "Updated By"];
    const headerHits = headers.map(function (h) {
      return { header: h, matches: findLabelVariants([h]) };
    });
    const foundHeaders = headerHits.filter(function (h) { return h.matches.length > 0; });
    tests.push(makeResult(
      12,
      "History column headers",
      headers.join(", "),
      foundHeaders.length > 0,
      foundHeaders.length,
      "FRAGILE",
      headerHits.map(function (h) {
        return h.header + ": " + (h.matches.length ? h.matches[0].count : 0);
      }).join("; "),
      false,
      foundHeaders
    ));
  }

  function summarizeTests(tests) {
    var pass = 0;
    var fail = 0;
    var warn = 0;
    tests.forEach(function (t) {
      if (t.id === 8) {
        warn++;
        return;
      }
      if (t.found && !t.warn) {
        pass++;
      } else if (t.found && t.warn) {
        warn++;
        pass++;
      } else {
        fail++;
      }
    });
    return { pass: pass, fail: fail, warn: warn, total: tests.length };
  }

  function makeReportFilename(baseName) {
    return baseName + "-" + new Date().toISOString().replace(/[:.]/g, "-") + ".txt";
  }

  function sendRuntimeMessage(message) {
    return browser.runtime.sendMessage(message).then(function(resp) {
      if (resp === undefined) {
        throw new Error("no response from background script — reload extension in about:debugging");
      }
      return resp;
    });
  }

  function downloadViaAnchor(text, filename) {
    const safeName = filename.replace(/[\\/:*?"<>|]/g, "-");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = safeName;
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(function() {
      if (anchor.parentNode) {
        anchor.parentNode.removeChild(anchor);
      }
      URL.revokeObjectURL(url);
    }, 5000);
    logVerify("download", "Fallback anchor download triggered in page context", {
      filename: safeName,
      bytes: text.length,
      note: "Used when browser.downloads from background fails"
    });
    return {
      ok: true,
      filename: safeName,
      bytes: text.length,
      method: "anchor-fallback"
    };
  }

  function saveReportToFile(text, baseName, saveAs) {
    const filename = makeReportFilename(baseName);
    logVerify("download", "Saving report to file via background script", {
      charCount: (text || "").length,
      filename: filename,
      saveAs: !!saveAs
    });

    function tryBackgroundDownload() {
      if ((text || "").length <= DOWNLOAD_CHUNK_CHARS) {
        return sendRuntimeMessage({
          action: "download_report",
          filename: filename,
          text: text,
          saveAs: !!saveAs
        });
      }

      const id = "report-" + Date.now();
      const chunks = [];
      for (let i = 0; i < text.length; i += DOWNLOAD_CHUNK_CHARS) {
        chunks.push(text.slice(i, i + DOWNLOAD_CHUNK_CHARS));
      }

      logVerify("download", "Report large — using chunked background transfer", {
        chunks: chunks.length,
        chunkSize: DOWNLOAD_CHUNK_CHARS,
        charCount: text.length
      });

      return sendRuntimeMessage({
        action: "download_report_start",
        id: id,
        filename: filename,
        saveAs: !!saveAs,
        totalChunks: chunks.length,
        totalLength: text.length
      }).then(function() {
        let chain = Promise.resolve();
        chunks.forEach(function(chunk, index) {
          chain = chain.then(function() {
            return sendRuntimeMessage({
              action: "download_report_chunk",
              id: id,
              index: index,
              chunk: chunk
            });
          });
        });
        return chain.then(function() {
          return sendRuntimeMessage({ action: "download_report_finish", id: id });
        });
      });
    }

    return tryBackgroundDownload().then(function(resp) {
      if (!resp || !resp.ok) {
        throw new Error((resp && resp.error) || "background download failed");
      }
      logVerify("download", "File save succeeded via background", resp);
      return resp;
    }).catch(function(err) {
      logVerifyWarn("download", "Background download failed — trying anchor fallback", err.message || String(err));
      return downloadViaAnchor(text, filename);
    });
  }

  function verifyBackgroundDownloads() {
    return sendRuntimeMessage({ action: "ping_background" }).then(function(resp) {
      logVerify("download", "Background downloads bridge OK", resp);
      return resp;
    }).catch(function(err) {
      logVerifyWarn("download", "Background ping failed — anchor fallback will be used if needed", err.message || String(err));
      return { ok: false };
    });
  }

  function maybeCopySmallSummary(text) {
    if ((text || "").length > CLIPBOARD_MAX_CHARS) {
      logVerify("clipboard", "Skipping clipboard — report too large for Notepad", {
        charCount: text.length,
        max: CLIPBOARD_MAX_CHARS,
        note: "Use saved file in Downloads instead"
      });
      return Promise.resolve({ method: "skipped-too-large", ok: false });
    }
    return copyTextToClipboard(text);
  }

  function copyTextToClipboard(text) {
    const charCount = (text || "").length;
    logVerify("clipboard", "Copy requested", {
      charCount: charCount,
      documentHasFocus: document.hasFocus(),
      visibilityState: document.visibilityState,
      isSecureContext: window.isSecureContext,
      hasNavigatorClipboard: !!(navigator.clipboard),
      hasWriteText: !!(navigator.clipboard && navigator.clipboard.writeText)
    });

    return new Promise(function (resolve, reject) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        logVerify("clipboard", "Trying navigator.clipboard.writeText() in content script");
        navigator.clipboard.writeText(text).then(function() {
          logVerify("clipboard", "navigator.clipboard.writeText() succeeded", { charCount: charCount });
          resolve({ method: "navigator.clipboard.writeText", ok: true });
        }).catch(function (err) {
          logVerifyWarn("clipboard", "navigator.clipboard.writeText() failed — trying execCommand fallback", {
            error: err && err.message ? err.message : String(err),
            name: err && err.name
          });
          const fallbackOk = fallbackCopy(text);
          if (fallbackOk) {
            logVerify("clipboard", "execCommand fallback succeeded", { charCount: charCount });
            resolve({ method: "document.execCommand('copy')", ok: true });
          } else {
            logVerifyError("clipboard", "Both clipboard methods failed", {
              primaryError: err && err.message ? err.message : String(err)
            });
            reject(new Error("clipboard write failed (navigator.clipboard and execCommand)"));
          }
        });
        return;
      }

      logVerifyWarn("clipboard", "navigator.clipboard.writeText unavailable — using execCommand only");
      const fallbackOk = fallbackCopy(text);
      if (fallbackOk) {
        logVerify("clipboard", "execCommand fallback succeeded", { charCount: charCount });
        resolve({ method: "document.execCommand('copy')", ok: true });
      } else {
        logVerifyError("clipboard", "execCommand fallback failed — clipboard unavailable");
        reject(new Error("clipboard unavailable"));
      }
    });
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      ta.setSelectionRange(0, text.length);
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      logVerify("clipboard", "execCommand('copy') result", { ok: ok, charCount: (text || "").length });
      return ok;
    } catch (e) {
      logVerifyError("clipboard", "execCommand fallback threw", e);
      return false;
    }
  }

  function section(title, body) {
    return "\n\n========== " + title + " ==========\n" + body;
  }

  function jsonBlock(obj) {
    return JSON.stringify(obj, null, 2);
  }

  function buildFullReportText(report) {
    const live = report.liveElements;
    const parts = [];

    parts.push("=== i3 SELECTOR TEST REPORT ===");
    parts.push("Timestamp: " + report.timestamp);
    parts.push("URL: " + report.url);
    parts.push("Page scope: " + report.pageScope);
    parts.push("Hash: " + (report.framework.hashRoute || ""));
    parts.push("Summary: pass=" + report.summary.pass + " fail=" + report.summary.fail + " warn=" + report.summary.warn);

    parts.push(section("FRAMEWORK", jsonBlock(report.framework)));
    parts.push(section("HINTS", jsonBlock(report.hints)));
    parts.push(section("LIVE ELEMENT COUNTS", jsonBlock(live.counts)));

    parts.push(section("TARGET SELECTOR TESTS", jsonBlock(report.tests)));

    parts.push(section(
      "ALL UNIQUE ARIA-LABELS (" + live.uniqueAriaLabels.length + ")",
      live.uniqueAriaLabels.join("\n")
    ));

    parts.push(section("ALL UNIQUE ROLES", live.uniqueRoles.join("\n")));

    parts.push(section("ALL BUTTONS (" + live.buttons.length + ")", jsonBlock(live.buttons)));
    parts.push(section("ALL CHECKBOXES (" + live.checkboxes.length + ")", jsonBlock(live.checkboxes)));
    parts.push(section("ALL TABS (" + live.tabs.length + ")", jsonBlock(live.tabs)));
    parts.push(section("ALL TEXT FIELDS (semantics) (" + live.textFields.length + ")", jsonBlock(live.textFields)));
    parts.push(section("ALL LINKS (semantics) (" + live.links.length + ")", jsonBlock(live.links)));
    parts.push(section("TEXT EDITING PROXY INPUTS (" + live.textEditingInputs.length + ")", jsonBlock(live.textEditingInputs)));
    parts.push(section("SCROLL CONTAINERS (" + live.scrollContainers.length + ")", jsonBlock(live.scrollContainers)));
    parts.push(section("CANVASES (" + live.canvases.length + ")", jsonBlock(live.canvases)));
    parts.push(section("FLUTTER SHELL ELEMENTS", jsonBlock(live.flutterShell)));
    parts.push(section("TAG/SERIAL DROPDOWN ANALYSIS", jsonBlock(live.dropdownInfo)));
    parts.push(section("SHADOW DOM (flt-glass-pane.shadowRoot)", jsonBlock(live.shadowDOM)));
    parts.push(section("INTERCEPTED API CALLS (" + (report.interceptedApiCalls ? report.interceptedApiCalls.length : 0) + ")", jsonBlock(report.interceptedApiCalls)));
    parts.push(section("FULL SEMANTICS TREE (" + live.semanticsTree.length + " nodes)", jsonBlock(live.semanticsTree)));
    parts.push(section("LABEL INDEX (aria-label -> locations)", jsonBlock(live.labelIndex)));
    parts.push(section("FULL REPORT JSON", jsonBlock(report)));

    return parts.join("\n");
  }

  function buildStorageSummary(report, textLength) {
    return {
      timestamp: report.timestamp,
      url: report.url,
      pageScope: report.pageScope,
      summary: report.summary,
      framework: {
        semanticsReady: report.framework.semanticsReady,
        semanticsHostChildCount: report.framework.semanticsHostChildCount,
        hashRoute: report.framework.hashRoute,
        renderer: report.framework.renderer
      },
      counts: report.liveElements.counts,
      tests: report.tests.map(function (t) {
        return {
          id: t.id,
          name: t.name,
          found: t.found,
          count: t.count,
          warn: t.warn,
          notes: t.notes
        };
      }),
      copiedToClipboard: report.copiedToClipboard,
      savedFile: report.savedFile,
      reportTextLength: textLength
    };
  }

  function printReportToConsole(report) {
    const fullText = buildFullReportText(report);
    const json = JSON.stringify(report, null, 2);

    console.log("%c=== i3 SELECTOR TEST REPORT ===", "font-weight:bold;font-size:14px;color:#073772;");
    console.log("Timestamp:", report.timestamp);
    console.log("URL:", report.url);
    console.log("Hash:", report.framework.hashRoute);
    console.log("Summary:", report.summary);
    console.log("Framework:", report.framework);
    console.log("Live element counts:", report.liveElements.counts);

    console.group("Target selector tests");
    console.table(report.tests.map(function (t) {
      return {
        id: t.id,
        name: t.name,
        found: t.found,
        count: t.count,
        warn: t.warn,
        notes: t.notes
      };
    }));
    console.groupEnd();

    console.group("All unique aria-labels (" + report.liveElements.uniqueAriaLabels.length + ")");
    console.log(report.liveElements.uniqueAriaLabels);
    console.groupEnd();

    console.group("All unique roles");
    console.log(report.liveElements.uniqueRoles);
    console.groupEnd();

    console.group("All buttons (" + report.liveElements.buttons.length + ")");
    console.table(report.liveElements.buttons.map(function (b) {
      return {
        ariaLabel: b.ariaLabel,
        visible: b.visible,
        top: b.rect.top,
        left: b.rect.left,
        treePath: b.treePath
      };
    }));
    console.groupEnd();

    console.group("All checkboxes (" + report.liveElements.checkboxes.length + ")");
    console.table(report.liveElements.checkboxes.map(function (c) {
      return {
        ariaLabel: c.ariaLabel,
        checked: c.ariaChecked,
        visible: c.visible,
        treePath: c.treePath
      };
    }));
    console.groupEnd();

    console.group("All tabs (" + report.liveElements.tabs.length + ")");
    console.table(report.liveElements.tabs);
    console.groupEnd();

    console.group("Text editing proxy inputs (" + report.liveElements.textEditingInputs.length + ")");
    console.table(report.liveElements.textEditingInputs);
    console.groupEnd();

    console.group("Full semantics tree (" + report.liveElements.semanticsTree.length + " nodes)");
    console.table(report.liveElements.semanticsTree);
    console.groupEnd();

    console.group("Label index (aria-label -> locations)");
    console.log(report.liveElements.labelIndex);
    console.groupEnd();

    console.group("Tag/Serial dropdown analysis");
    console.log(report.liveElements.dropdownInfo);
    console.groupEnd();

    console.group("Shadow DOM info");
    console.log(report.liveElements.shadowDOM);
    console.groupEnd();

    console.group("Intercepted API calls (" + (report.interceptedApiCalls ? report.interceptedApiCalls.length : 0) + ")");
    if (report.interceptedApiCalls && report.interceptedApiCalls.length) {
      console.table(report.interceptedApiCalls.map(function(c) {
        return { url: c.url, method: c.method, status: c.status, bodyLength: c.bodyLength, timestamp: c.timestamp };
      }));
      report.interceptedApiCalls.forEach(function(c) {
        console.group("API: " + c.url);
        if (c.requestBody) console.log("Request body:", c.requestBody);
        console.log("Response preview:", c.bodyPreview);
        console.groupEnd();
      });
    } else {
      console.log("None yet — interact with the page (click History Details, trigger export) and run again.");
    }
    console.groupEnd();

    console.group("FULL REPORT TEXT (same as clipboard — " + fullText.length + " chars)");
    console.log(fullText);
    console.groupEnd();

    console.group("FULL REPORT JSON");
    console.log(json);
    console.groupEnd();

    console.log("%c=== END REPORT — saved to Downloads if file save succeeded (" + fullText.length + " chars) ===", "font-weight:bold;color:#073772;");
  }

  function showBanner(summary, savedFile, copied) {
    var existing = document.getElementById("i3-selector-test-banner");
    if (existing) {
      existing.remove();
    }

    var fileNote = savedFile && savedFile.ok
      ? " — saved " + savedFile.filename
      : " — file save failed, see console";

    var banner = document.createElement("div");
    banner.id = "i3-selector-test-banner";
    banner.textContent = "i3 Test: " + summary.pass + " pass / " + summary.fail + " fail" +
      (summary.warn ? " (" + summary.warn + " warn)" : "") +
      fileNote +
      (copied ? " (small clipboard copy)" : "");
    banner.style.cssText = [
      "position: fixed",
      "top: 12px",
      "right: 12px",
      "z-index: 2147483647",
      "background: #073772",
      "color: #fff",
      "font: bold 13px Arial, Helvetica, sans-serif",
      "padding: 10px 14px",
      "border-radius: 4px",
      "box-shadow: 0 2px 8px rgba(0,0,0,0.25)",
      "max-width: 320px",
      "line-height: 1.4"
    ].join(";");
    document.body.appendChild(banner);

    setTimeout(function () {
      if (banner.parentNode) {
        banner.parentNode.removeChild(banner);
      }
    }, 15000);
  }

  async function runTests(page) {
    logVerify("run", "run_tests started", { page: page, url: location.href });
    injectFetchInterceptor();
    listenForApiCaptures();
    await new Promise(function(r) { setTimeout(r, 100); });
    var framework = detectFramework();
    var semanticsWait = await waitForSemantics(SEMANTICS_TIMEOUT_MS);
    framework.semanticsHostChildCount = semanticsWait.childCount;
    framework.semanticsReady = semanticsWait.ready;
    framework.semanticsWaitedMs = semanticsWait.waitedMs;

    var shadowInfo = probeShadowDOM();
    var liveElements = collectLiveElements();
    liveElements.shadowDOM = shadowInfo;
    liveElements.dropdownInfo = getDropdownInfo();
    var tests = [];

    if (!semanticsWait.ready) {
      tests.push(makeResult(
        0,
        "Flutter semantics ready",
        "flt-semantics-host must have child nodes",
        false,
        semanticsWait.childCount,
        "FRAGILE",
        "Semantics tree empty after " + (SEMANTICS_TIMEOUT_MS / 1000) + "s. Flutter may have accessibility disabled, or page still loading. Proxy inputs found: " + liveElements.textEditingInputs.length + ". Canvas count: " + liveElements.canvases.length + "."
      ));
    }

    if (shouldRun(page, "reports")) {
      runReportsTests(tests, liveElements);
    }
    if (shouldRun(page, "search")) {
      runSearchTests(tests, liveElements);
    }
    if (shouldRun(page, "history")) {
      runHistoryTests(tests, liveElements);
    }

    var summary = summarizeTests(tests);

    var report = {
      timestamp: new Date().toISOString(),
      url: location.href,
      pageScope: page,
      framework: framework,
      summary: summary,
      tests: tests,
      liveElements: liveElements,
      interceptedApiCalls: interceptedApiCalls.slice(),
      hints: {
        ifAllFailed: semanticsWait.ready
          ? "Semantics loaded but target labels not on this page/overlay. Check uniqueAriaLabels and buttons in liveElements."
          : "Semantics tree never populated — accessibility may be off. Only canvas + hidden flt-text-editing inputs exist.",
        reportsPage: "Navigate to #/inventory/settings/reports and open Sitename filter before testing element 2.",
        searchPage: "Navigate to inventory search; type 3+ chars before testing element 8.",
        historyPage: "Open a device detail modal and click History Details before testing 9–12."
      }
    };

    var fullText = buildFullReportText(report);
    cachedReport = report;
    cachedFullReportText = fullText;

    var copied = false;
    var clipboardMethod = null;
    var savedFile = null;
    try {
      savedFile = await saveReportToFile(fullText, "i3-selector-report", false);
    } catch (e) {
      report.saveError = e.message;
      logVerifyError("download", "run_tests file save failed", e.message || String(e));
    }
    try {
      var copyResult = await maybeCopySmallSummary(fullText);
      if (copyResult && copyResult.ok) {
        copied = true;
        clipboardMethod = copyResult.method;
      }
    } catch (e) {
      report.clipboardError = e.message;
      logVerifyError("clipboard", "run_tests copy skipped/failed", e.message || String(e));
    }

    report.copiedToClipboard = copied;
    report.clipboardMethod = clipboardMethod;
    report.savedFile = savedFile;
    report.reportTextLength = fullText.length;
    report.interceptorStatus = interceptorStatus;

    await browser.storage.local.set({
      lastReportSummary: buildStorageSummary(report, fullText.length)
    });

    printReportToConsole(report);
    logInterceptorVerificationSummary();
    showBanner(summary, savedFile, copied);

    return report;
  }

  browser.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (!message) {
      return false;
    }

    logVerify("message", "Received from extension UI", { action: message.action });

    if (message.action === "enable_semantics") {
      runEnableSemantics()
        .then(function() { sendResponse({ ok: true }); })
        .catch(function(err) { sendResponse({ ok: false, error: err.message || String(err) }); });
      return true;
    }

    if (message.action === "full_dump") {
      runFullDump()
        .then(function(result) { sendResponse({ ok: true, result: result }); })
        .catch(function(err) { sendResponse({ ok: false, error: err.message || String(err) }); });
      return true;
    }

    if (message.action === "run_tests") {
      runTests(message.page || "all")
        .then(function (report) {
          sendResponse({ ok: true, report: report });
        })
        .catch(function (err) {
          sendResponse({ ok: false, error: err.message || String(err) });
        });
      return true;
    }

    if (message.action === "save_report") {
      var saveText = cachedFullReportText;
      if (!saveText && cachedReport) {
        saveText = buildFullReportText(cachedReport);
        cachedFullReportText = saveText;
      }
      if (!saveText) {
        sendResponse({ ok: false, error: "no report in memory — run tests on this tab first" });
        return true;
      }
      saveReportToFile(saveText, message.baseName || "i3-selector-report", !!message.saveAs)
        .then(function(resp) { sendResponse(resp); })
        .catch(function(err) { sendResponse({ ok: false, error: err.message || String(err) }); });
      return true;
    }

    if (message.action === "copy_report") {
      var text = cachedFullReportText;
      if (!text && cachedReport) {
        text = buildFullReportText(cachedReport);
        cachedFullReportText = text;
      }
      if (!text) {
        sendResponse({ ok: false, error: "no report in memory — run tests on this tab first" });
        return true;
      }
      maybeCopySmallSummary(text).then(function (copyResult) {
        if (copyResult && copyResult.ok) {
          logVerify("clipboard", "copy_report succeeded", {
            charCount: text.length,
            method: copyResult.method
          });
          sendResponse({ ok: true, copied: true, length: text.length, method: copyResult.method });
        } else {
          sendResponse({
            ok: false,
            error: "report too large for clipboard (" + text.length + " chars) — use Save File instead"
          });
        }
      }).catch(function (err) {
        logVerifyError("clipboard", "copy_report failed", err.message || String(err));
        sendResponse({ ok: false, error: err.message });
      });
      return true;
    }

    if (message.action === "get_report_text") {
      var reportText = cachedFullReportText;
      if (!reportText && cachedReport) {
        reportText = buildFullReportText(cachedReport);
        cachedFullReportText = reportText;
      }
      sendResponse({
        ok: !!reportText,
        text: reportText || "",
        length: reportText ? reportText.length : 0
      });
      return true;
    }

    // ---- API Lookup Test ----
    // Called from the popup to verify the i3 API endpoint works with the live JWT.
    // Returns device data directly — never touches the relay or backend.
    if (message.action === "test_lookup") {
      (function () {
        function i3GetToken() {
          var raw = localStorage.getItem("flutter.loginToken");
          if (!raw) throw new Error("No token in localStorage — log in to i3 first");
          return JSON.parse(raw);
        }
        function i3IsAuthenticated() {
          return localStorage.getItem("flutter.isAuthenticated") === "true";
        }
        function i3ConvertDate(apiDate) {
          // "2025-09-12 21:26:05.848" → "09-12-2025 21:26"
          var spaceIdx = apiDate.indexOf(" ");
          var datePart = apiDate.slice(0, spaceIdx);
          var timePart = apiDate.slice(spaceIdx + 1);
          var d = datePart.split("-");
          var t = timePart.split(":");
          return d[1] + "-" + d[2] + "-" + d[0] + " " + t[0] + ":" + t[1];
        }

        try {
          if (!i3IsAuthenticated()) {
            sendResponse({ ok: false, error: "Not logged in to i3 — log in and try again" });
            return;
          }
          var token = i3GetToken();
          var assetTag = message.assetTag || "";
          var url = "https://ims.lisd.net/inventory/transfer/getTagInformationByTagOrSerialId/" +
                    encodeURIComponent(assetTag) + "/0";

          logVerify("api-lookup", "Fetching device", { assetTag: assetTag, url: url });

          fetch(url, {
            credentials: "include",  // sends JSESSIONID cookie — required by this server
            headers: {
              // Server expects bare JWT, no "Bearer " prefix
              "Authorization": token,
              "Accept": "application/json",
              "Content-type": "application/json; charset=utf-8"
            }
          })
          .then(function (resp) {
            if (!resp.ok) throw new Error("HTTP " + resp.status + " for tag \"" + assetTag + "\"");
            return resp.json();
          })
          .then(function (data) {
            logVerify("api-lookup", "Raw API response", data);
            if (!data.value) {
              throw new Error("Tag \"" + assetTag + "\" not found in i3 — check the asset tag");
            }
            var historyRows = (data.listOfResponses || []).map(function (row) {
              return {
                date:        i3ConvertDate(row.date || ""),
                assigned_to: row.inPlaceType || "",
                break_name:  row.strike     || "",
                site_name:   row.siteName   || "",
                status:      row.status     || ""
              };
            });
            sendResponse({
              ok: true,
              serial:       data.serialNo    || "",
              product_name: data.productName || "",
              school_name:  data.siteName    || "",
              history_rows: historyRows,
              raw:          data
            });
          })
          .catch(function (err) {
            logVerifyError("api-lookup", "Fetch failed", err.message || String(err));
            sendResponse({ ok: false, error: err.message || String(err) });
          });
        } catch (e) {
          sendResponse({ ok: false, error: e.message || String(e) });
        }
      })();
      return true; // keep channel open for async response
    }

    return false;
  });

  runStartupVerification();
  injectFetchInterceptor();
  listenForApiCaptures();
  verifyBackgroundDownloads();
})();
