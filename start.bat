@echo off
cd /d "%~dp0"

echo Starting TRC Optimizer relay...
start "TRC_Opt Relay" /D "%~dp0relay" cmd /k node server.js

timeout /t 2 /nobreak >nul

echo.
echo ============================================
echo   TRC Optimizer is running (localhost only)
echo ============================================
echo.
echo   Open:  http://localhost:4321
echo   Debug: http://localhost:4321/debug
echo.
echo   Network access is disabled to avoid Windows
echo   Firewall prompts (no admin required).
echo.

start "" http://localhost:4321
pause
