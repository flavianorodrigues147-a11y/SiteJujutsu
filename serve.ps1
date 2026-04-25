$ErrorActionPreference = "Stop"

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:4173/")
$listener.Start()

$root = (Get-Location).Path

$mimeTypes = @{
    ".css"  = "text/css; charset=utf-8"
    ".gif"  = "image/gif"
    ".html" = "text/html; charset=utf-8"
    ".ico"  = "image/x-icon"
    ".jpeg" = "image/jpeg"
    ".jpg"  = "image/jpeg"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".svg"  = "image/svg+xml"
    ".webp" = "image/webp"
}

function Send-File {
    param(
        [string]$Path,
        [System.Net.HttpListenerResponse]$Response
    )

    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
        $Response.StatusCode = 404
        $buffer = [System.Text.Encoding]::UTF8.GetBytes("Not found")
        $Response.OutputStream.Write($buffer, 0, $buffer.Length)
        $Response.Close()
        return
    }

    $extension = [System.IO.Path]::GetExtension($Path).ToLowerInvariant()
    $Response.ContentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
    $bytes = [System.IO.File]::ReadAllBytes($Path)
    $Response.ContentLength64 = $bytes.Length
    $Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $Response.Close()
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $requestPath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))

    if ([string]::IsNullOrWhiteSpace($requestPath)) {
        $requestPath = "index.html"
    }

    $candidate = [System.IO.Path]::GetFullPath((Join-Path $root $requestPath))

    if (-not $candidate.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
        $context.Response.StatusCode = 403
        $buffer = [System.Text.Encoding]::UTF8.GetBytes("Forbidden")
        $context.Response.OutputStream.Write($buffer, 0, $buffer.Length)
        $context.Response.Close()
        continue
    }

    if (Test-Path -LiteralPath $candidate -PathType Container) {
        $candidate = Join-Path $candidate "index.html"
    }

    Send-File -Path $candidate -Response $context.Response
}
