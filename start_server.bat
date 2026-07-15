@echo off
echo Starting local web server...
echo Access the site at: http://localhost:8080/
echo.
echo Press Ctrl+C to stop the server.
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1
