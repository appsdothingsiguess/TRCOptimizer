start "" cmd /c "cd relay && node server.js"
timeout /t 2 /nobreak
start "" http://localhost:4321
