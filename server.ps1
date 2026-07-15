$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Server started on port $port..."
Write-Host "Access the site at: http://localhost:$port/"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $url = $request.Url.LocalPath
        if ($url -eq "/") {
            $url = "/index.html"
        }

        # URL decode path to handle spaces and special chars
        $decodedUrl = [System.Uri]::UnescapeDataString($url)
        # Ensure we don't have path traversal
        $decodedUrl = $decodedUrl -replace "\.\.", ""
        
        $filePath = Join-Path $PSScriptRoot $decodedUrl.TrimStart("/")

        if (Test-Path $filePath -PathType Container) {
            # If it's a directory, try index.html inside it
            $filePath = Join-Path $filePath "index.html"
        }

        if (Test-Path $filePath -PathType Leaf) {
            try {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                
                # Content type detection
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css" { "text/css; charset=utf-8" }
                    ".js" { "text/javascript; charset=utf-8" }
                    ".png" { "image/png" }
                    ".jpg" { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".gif" { "image/gif" }
                    ".svg" { "image/svg+xml" }
                    ".ico" { "image/x-icon" }
                    ".webp" { "image/webp" }
                    ".mp4" { "video/mp4" }
                    default { "application/octet-stream" }
                }

                $response.ContentType = $contentType
                $response.Headers.Add("Cache-Control", "no-store, no-cache, must-revalidate")
                $response.Headers.Add("Pragma", "no-cache")
                $response.ContentLength64 = $bytes.Length

                # Only write body if the request method is not HEAD
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
                $response.Close()
            } catch {
                $response.StatusCode = 500
                $html = "<html><body><h1>500 Internal Server Error</h1><p>$($_.Exception.Message)</p></body></html>"
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($html)
                $response.ContentType = "text/html; charset=utf-8"
                $response.ContentLength64 = $bytes.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
                $response.Close()
            }
        } else {
            $response.StatusCode = 404
            $html = "<html><body><h1>404 Not Found</h1><p>File not found: $decodedUrl</p></body></html>"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($html)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $bytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            $response.Close()
        }
    }
} catch {
    Write-Host "Error in server: $_"
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
}
