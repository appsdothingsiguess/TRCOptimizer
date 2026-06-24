@echo off
cd /d "%~dp0"

echo Stopping TRC Optimizer...
taskkill /F /IM node.exe /T 2>nul
taskkill /F /IM python.exe /T 2>nul
timeout /t 2 /nobreak >nul

echo Starting relay...
start "TRC_Opt Relay" /D "%~dp0relay" cmd /k node server.js
