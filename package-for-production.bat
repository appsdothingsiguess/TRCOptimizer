@echo off
setlocal
cd /d "%~dp0"

set "OUT=%~dp0dist\TRC_Opt"

echo ============================================
echo   Packaging TRC Optimizer for production
echo   (DEV MACHINE - copies files only)
echo ============================================
echo.
echo   This script does NOT run npm or pip.
echo   Dependencies are installed on the PRODUCTION PC
echo   after you copy the folder, using setup-production.bat
echo.
echo Output: %OUT%
echo.

if exist "%OUT%" rmdir /s /q "%OUT%"
mkdir "%OUT%" 2>nul
mkdir "%OUT%\backend" 2>nul
mkdir "%OUT%\relay" 2>nul
mkdir "%OUT%\frontend" 2>nul
mkdir "%OUT%\extension" 2>nul
mkdir "%OUT%\data" 2>nul

REM --- Root launchers and docs ---
copy /Y "start.bat" "%OUT%\" >nul
copy /Y "restart.bat" "%OUT%\" >nul
copy /Y "setup-production.bat" "%OUT%\" >nul
copy /Y "README.md" "%OUT%\" >nul
copy /Y "DEPLOY.md" "%OUT%\" >nul

REM --- Backend (Python) ---
copy /Y "backend\*.py" "%OUT%\backend\" >nul
copy /Y "backend\requirements.txt" "%OUT%\backend\" >nul

REM --- Relay (Node) - no node_modules ---
copy /Y "relay\package.json" "%OUT%\relay\" >nul
copy /Y "relay\package-lock.json" "%OUT%\relay\" >nul 2>nul
copy /Y "relay\server.js" "%OUT%\relay\" >nul

REM --- Frontend (runtime files only) ---
copy /Y "frontend\index.html" "%OUT%\frontend\" >nul
copy /Y "frontend\style.css" "%OUT%\frontend\" >nul
copy /Y "frontend\main.js" "%OUT%\frontend\" >nul
copy /Y "frontend\debug.html" "%OUT%\frontend\" >nul
copy /Y "frontend\debug.css" "%OUT%\frontend\" >nul
copy /Y "frontend\debug.js" "%OUT%\frontend\" >nul
xcopy /E /I /Y "frontend\assets" "%OUT%\frontend\assets" >nul

REM --- Firefox extension ---
copy /Y "extension\manifest.json" "%OUT%\extension\" >nul
copy /Y "extension\background.js" "%OUT%\extension\" >nul
copy /Y "extension\content.js" "%OUT%\extension\" >nul
copy /Y "extension\i3-selectors.md" "%OUT%\extension\" >nul

REM --- Excel template / intake workbook ---
copy /Y "data\macbook_intake.xlsx" "%OUT%\data\" >nul

echo.
echo ============================================
echo   Package ready
echo ============================================
echo.
echo   Folder: %OUT%
echo.
echo   Copy the entire TRC_Opt folder to the production PC
echo   (USB, network share, etc.), then run setup-production.bat there.
echo.
echo   On updates: see DEPLOY.md - do not overwrite production Excel.
echo.
pause
