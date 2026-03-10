$themesToFix = @('theme-09', 'theme-16', 'theme-17', 'theme-18', 'theme-19', 'theme-23', 'theme-26', 'theme-27', 'theme-28', 'theme-29')

foreach ($theme in $themesToFix) {
    $filePath = "c:\Users\Gabriel\Desktop\themes\atasolutions\themes\$theme-preview.html"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Find the FIRST occurrence of </html>
        $htmlIndex = $content.IndexOf('</html>')
        
        if ($htmlIndex -gt 0) {
            # Keep everything up to and including the first </html>
            $trimmed = $content.Substring(0, $htmlIndex + 7)
            
            # Write back to file
            Set-Content -Path $filePath -Value $trimmed
            Write-Host "✓ Fixed $theme"
        }
    }
}

Write-Host "`nAll theme files cleaned!"
