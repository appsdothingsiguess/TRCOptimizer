@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo   TRC Optimizer - Production Setup
echo   *** RUN ON THE PRODUCTION PC ONLY ***
echo ============================================
echo.
echo   Do not run this on your dev machine.
echo   Copy dist\TRC_Opt to production first, then run this there.
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js not found. Install Node 18+ and ensure "node" is on PATH.
  goto :fail
)

where python >nul 2>&1
if errorlevel 1 (
  echo ERROR: Python not found. Install Python 3.10+ and ensure "python" is on PATH.
  goto :fail
)

if not exist "relay\package.json" (
  echo ERROR: relay\package.json missing. Copy the full TRC_Opt folder first.
  goto :fail
)

if not exist "data\macbook_intake.xlsx" (
  echo ERROR: data\macbook_intake.xlsx missing. Place the intake workbook in data\ before setup.
  goto :fail
)

echo [1/2] Installing Node dependencies in relay\ ...
cd /d "%~dp0relay"
if exist "package-lock.json" (
  call npm ci
) else (
  call npm install
)
if errorlevel 1 goto :fail
cd /d "%~dp0"

echo.
echo [2/2] Installing Python dependencies in backend\ ...
cd /d "%~dp0backend"
python -m pip install -r requirements.txt
if errorlevel 1 goto :fail
cd /d "%~dp0"

echo.
echo ============================================
echo   Setup complete
echo ============================================
echo.
echo   Next steps:
echo   1. Firefox - about:debugging - Load extension\manifest.json
echo   2. Log in to ims.lisd.net in Firefox
echo   3. Double-click start.bat
echo.
echo   See DEPLOY.md for network access and updates.
echo.
pause
exit /b 0

:fail
echo.
echo Setup failed. Fix the errors above and run this script again.
pause
exit /b 1
