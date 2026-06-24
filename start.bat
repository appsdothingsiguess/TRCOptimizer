@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo Starting TRC Optimizer relay...
start "TRC_Opt Relay" /D "%~dp0relay" cmd /k node server.js

timeout /t 2 /nobreak >nul

echo.
echo ============================================
echo   TRC Optimizer is running on port 4321
echo ============================================
echo.
echo   On this PC:  http://localhost:4321
echo.
echo   On the network ^(other devices — use IP, not localhost^):

set "OPEN_URL="
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  set "IP=%%a"
  set "IP=!IP: =!"
  if not "!IP!"=="" (
    echo     http://!IP!:4321
    if not defined OPEN_URL set "OPEN_URL=http://!IP!:4321"
  )
)

if not defined OPEN_URL (
  echo     ^(no IPv4 address found — run ipconfig^)
  set "OPEN_URL=http://localhost:4321"
)

echo.
echo ============================================
echo   Opening %OPEN_URL%
echo ============================================
echo.

start "" "%OPEN_URL%"
pause
