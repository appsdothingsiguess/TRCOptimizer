// tsc main.ts --target ES2020 --strict false --outFile main.js
document.addEventListener("DOMContentLoaded", () => {
    const assetTagEl = document.getElementById("asset-tag");
    const iiqTicketEl = document.getElementById("iiq-ticket");
    const techInitialsEl = document.getElementById("tech-initials");
    const runIntakeBtn = document.getElementById("run-intake");
    const statusEl = document.getElementById("status");
    assetTagEl.focus();
    const ws = new WebSocket(`ws://${location.host}/frontend-ws`);
    function setStatus(text, cls) {
        statusEl.textContent = text;
        statusEl.classList.remove("status-success", "status-error");
        if (cls !== null) {
            statusEl.classList.add(cls);
        }
        statusEl.style.display = text ? "block" : "none";
    }
    function resetForm() {
        assetTagEl.value = "";
        iiqTicketEl.value = "";
        techInitialsEl.value = "";
        setStatus("", null);
        runIntakeBtn.disabled = true;
        assetTagEl.focus();
    }
    function checkFields() {
        if (assetTagEl.value.trim() !== "" &&
            iiqTicketEl.value.trim() !== "" &&
            techInitialsEl.value.trim() !== "") {
            runIntakeBtn.removeAttribute("disabled");
        }
        else {
            runIntakeBtn.setAttribute("disabled", "");
        }
    }
    assetTagEl.addEventListener("input", checkFields);
    iiqTicketEl.addEventListener("input", checkFields);
    techInitialsEl.addEventListener("input", checkFields);
    let debounceTimer = null;
    assetTagEl.addEventListener("input", () => {
        if (debounceTimer !== null)
            clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (iiqTicketEl.value === "") {
                iiqTicketEl.focus();
            }
        }, 300);
    });
    ws.onmessage = (event) => {
        let msg;
        try {
            msg = JSON.parse(event.data);
        }
        catch {
            return;
        }
        switch (msg.type) {
            case "status":
                setStatus(msg.message, null);
                break;
            case "error":
                setStatus("Error: " + msg.message, "status-error");
                break;
            case "done":
                setStatus("Done \u2014 " + msg.product_name +
                    " | Serial: " + msg.serial +
                    " | Campus: " + msg.school_name +
                    " | Breaks: " + msg.break_count, "status-success");
                setTimeout(() => resetForm(), 3000);
                break;
        }
    };
    ws.onclose = () => {
        setStatus("Connection lost \u2014 reload the page", "status-error");
    };
    runIntakeBtn.addEventListener("click", async () => {
        const asset_tag = assetTagEl.value.trim();
        const iiq_ticket = iiqTicketEl.value.trim();
        const tech_initials = techInitialsEl.value.trim();
        setStatus("Looking up device in i3\u2026", null);
        runIntakeBtn.disabled = true;
        try {
            const response = await fetch("/start-intake", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ iiq_ticket, asset_tag, tech_initials }),
            });
            const data = await response.json();
            if (response.ok && data.status === "started") {
                return;
            }
            if (data.status === "error") {
                setStatus("Error: " + data.error, "status-error");
                runIntakeBtn.disabled = false;
                return;
            }
            setStatus("Error: Unexpected response from relay", "status-error");
            runIntakeBtn.disabled = false;
        }
        catch {
            setStatus("Error: Could not reach relay", "status-error");
            runIntakeBtn.disabled = false;
        }
    });
});
