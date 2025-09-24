# Test direct connectivity to the Railway backend
Write-Host "Testing direct connectivity to Railway backend: https://scrapebackend-production.up.railway.app/api/navigation"

# Try to reach the backend directly
try {
    $response = Invoke-WebRequest -Uri "https://scrapebackend-production.up.railway.app/api/navigation" -Method GET -UseBasicParsing -TimeoutSec 10
    
    Write-Host "\nDirect Connection Test Result:" -ForegroundColor Green
    Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
    
    if ($response.StatusCode -eq 200) {
        Write-Host "Backend is accessible directly!" -ForegroundColor Green
        Write-Host "\nResponse Preview:" -ForegroundColor Yellow
        $response.Content.Substring(0, [Math]::Min(500, $response.Content.Length))
    } else {
        Write-Host "Backend returned non-200 status code" -ForegroundColor Yellow
        Write-Host "Headers:" -ForegroundColor Yellow
        $response.Headers | Format-Table -AutoSize
    }
} catch {
    Write-Host "\nError connecting to backend directly: $_" -ForegroundColor Red
    Write-Host "\nPossible issues:" -ForegroundColor Yellow
    Write-Host "1. Backend service might be down"
    Write-Host "2. Network/firewall restrictions"
    Write-Host "3. Incorrect backend URL"
}