taskkill /F /IM node.exe /T
taskkill /F /IM python.exe /T
timeout /t 2 /nobreak
start "" cmd /c "cd relay && node server.js"
