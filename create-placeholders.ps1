# PowerShell script to create placeholder images

# Function to create a placeholder image
function Create-PlaceholderImage {
    param (
        [string]$outputPath,
        [string]$text,
        [int]$width = 600,
        [int]$height = 400,
        [string]$backgroundColor = "#70A9A1",
        [string]$textColor = "white"
    )

    $html = @"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Placeholder</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: ${width}px;
            height: ${height}px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${backgroundColor};
            color: ${textColor};
            font-family: Arial, sans-serif;
            text-align: center;
            overflow: hidden;
        }
        .content {
            padding: 20px;
            max-width: 90%;
        }
        h2 {
            margin: 0;
            padding: 0;
            font-size: 24px;
        }
        p {
            margin: 10px 0 0 0;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="content">
        <h2>Cuban's Coco Loco</h2>
        <p>${text}</p>
    </div>
</body>
</html>
"@

    $tempHtmlPath = [System.IO.Path]::GetTempFileName() + ".html"
    $html | Out-File -FilePath $tempHtmlPath -Encoding utf8

    # Create directory if it doesn't exist
    $directory = [System.IO.Path]::GetDirectoryName($outputPath)
    if (!(Test-Path -Path $directory)) {
        New-Item -Path $directory -ItemType Directory -Force | Out-Null
    }

    # Now convert HTML to image using Chrome headless
    $chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
    if (!(Test-Path -Path $chromePath)) {
        $chromePath = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    }

    if (Test-Path -Path $chromePath) {
        $tempPdfPath = [System.IO.Path]::GetTempFileName() + ".pdf"
        
        # Use Chrome to convert HTML to PDF
        & $chromePath --headless --disable-gpu --print-to-pdf="$tempPdfPath" $tempHtmlPath

        # Check if we have Microsoft.Office.Interop.Word available for PDF to JPG conversion
        try {
            $word = New-Object -ComObject Word.Application
            $word.Visible = $false
            $doc = $word.Documents.Open($tempPdfPath)
            $doc.ExportAsFixedFormat($outputPath.Replace(".jpg", ".pdf"), 17)
            $doc.Close()
            $word.Quit()
            [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
            
            Write-Host "Created placeholder: $outputPath"
        }
        catch {
            # Fall back to just copying the PDF
            Copy-Item -Path $tempPdfPath -Destination $outputPath.Replace(".jpg", ".pdf") -Force
            Write-Host "Created PDF placeholder: $($outputPath.Replace('.jpg', '.pdf'))"
        }
        
        # Clean up temporary files
        Remove-Item -Path $tempPdfPath -Force -ErrorAction SilentlyContinue
    }
    else {
        # Just save the HTML file if Chrome is not available
        $htmlOutputPath = $outputPath.Replace(".jpg", ".html")
        Copy-Item -Path $tempHtmlPath -Destination $htmlOutputPath -Force
        Write-Host "Created HTML placeholder: $htmlOutputPath"
    }

    # Clean up temporary files
    Remove-Item -Path $tempHtmlPath -Force -ErrorAction SilentlyContinue
}

# Create home page images
$homeImages = @{
    "images\restaurant-interior.jpg" = "Restaurant Interior"
    "images\cuban-sandwich.jpg" = "Cuban Sandwich"
    "images\ropa-vieja.jpg" = "Ropa Vieja"
    "images\lechon-asado.jpg" = "Lechon Asado"
}

foreach ($key in $homeImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $homeImages[$key]
}

# Create about page images
$aboutImages = @{
    "images\about\restaurant-front.jpg" = "Restaurant Front"
    "images\about\chef-cooking.jpg" = "Chef Cooking"
    "images\about\dining-area.jpg" = "Dining Area"
    "images\about\family-meal.jpg" = "Family Meal"
}

foreach ($key in $aboutImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $aboutImages[$key] -backgroundColor "#9EC1A3"
}

# Create team images
$teamImages = @{
    "images\team\owner.jpg" = "Miguel Hernandez - Owner & Head Chef"
    "images\team\chef.jpg" = "Elena Rodriguez - Executive Chef"
    "images\team\manager.jpg" = "Carlos Diaz - Restaurant Manager"
}

foreach ($key in $teamImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $teamImages[$key] -width 300 -height 400 -backgroundColor "#CFE0C3"
}

# Create testimonial images
$testimonialImages = @{
    "images\testimonials\customer1.jpg" = "Sarah M."
    "images\testimonials\customer2.jpg" = "John and Lisa K."
    "images\testimonials\customer3.jpg" = "Roberto C."
}

foreach ($key in $testimonialImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $testimonialImages[$key] -width 150 -height 150 -backgroundColor "#3B5249"
}

# Create gallery food images
$galleryFoodImages = @{
    "images\gallery\cuban-sandwich.jpg" = "Cuban Sandwich"
    "images\gallery\ropa-vieja-plate.jpg" = "Ropa Vieja Plate"
    "images\gallery\lechon-asado.jpg" = "Lechon Asado"
    "images\gallery\empanadas.jpg" = "Empanadas"
    "images\gallery\tres-leches.jpg" = "Tres Leches Cake"
    "images\gallery\flan.jpg" = "Flan"
}

foreach ($key in $galleryFoodImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $galleryFoodImages[$key] -backgroundColor "#AC4B1C"
}

# Create gallery drink images
$galleryDrinkImages = @{
    "images\gallery\mojito.jpg" = "Mojito"
    "images\gallery\cuba-libre.jpg" = "Cuba Libre"
    "images\gallery\cuban-coffee.jpg" = "Cuban Coffee"
    "images\gallery\tropical-drinks.jpg" = "Tropical Drinks"
}

foreach ($key in $galleryDrinkImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $galleryDrinkImages[$key] -backgroundColor "#F3752B"
}

# Create gallery restaurant images
$galleryRestaurantImages = @{
    "images\gallery\restaurant-exterior.jpg" = "Restaurant Exterior"
    "images\gallery\dining-area-1.jpg" = "Dining Area"
    "images\gallery\dining-area-2.jpg" = "Dining Area Night"
    "images\gallery\bar-area.jpg" = "Bar Area"
    "images\gallery\kitchen.jpg" = "Kitchen"
}

foreach ($key in $galleryRestaurantImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $galleryRestaurantImages[$key] -backgroundColor "#617073"
}

# Create gallery event images
$galleryEventImages = @{
    "images\gallery\live-music.jpg" = "Live Music Night"
    "images\gallery\salsa-night.jpg" = "Salsa Night"
    "images\gallery\private-party.jpg" = "Private Party"
    "images\gallery\cooking-class.jpg" = "Cuban Cooking Class"
}

foreach ($key in $galleryEventImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $galleryEventImages[$key] -backgroundColor "#D5C7BC" -textColor "#333"
}

# Create Instagram images
$instagramImages = @{
    "images\instagram\insta1.jpg" = "Instagram Post 1"
    "images\instagram\insta2.jpg" = "Instagram Post 2"
    "images\instagram\insta3.jpg" = "Instagram Post 3"
    "images\instagram\insta4.jpg" = "Instagram Post 4"
    "images\instagram\insta5.jpg" = "Instagram Post 5"
    "images\instagram\insta6.jpg" = "Instagram Post 6"
}

foreach ($key in $instagramImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $instagramImages[$key] -width 300 -height 300 -backgroundColor "#E16036"
}

# Create menu images
$menuImages = @{
    # Appetizers
    "images\menu\tostones-boniato.jpg" = "Tostones De Boniato"
    "images\menu\empanada-cubano.jpg" = "Empanada Sandwich Cubano"
    "images\menu\croqueta-pulpo.jpg" = "Croqueta De Pulpo Y Camarones"
    "images\menu\croqueta-quesos.jpg" = "Croqueta 4 Quesos"
    "images\menu\coconut-shrimp.jpg" = "Coconut Shrimp"
    "images\menu\camaron-ajillo.jpg" = "Camarón Al Ajillo"
    
    # Cold Starters
    "images\menu\coctel-camarones.jpg" = "Coctel De Camarones"
    "images\menu\ceviche.jpg" = "Ceviche"
    "images\menu\carpaccio.jpg" = "Carpaccio De Res"
    
    # Entrées
    "images\menu\sabana-encebollada.jpg" = "Sabana Encebollada"
    "images\menu\churrasco.jpg" = "Guajiro Steak (Churrasco)"
    "images\menu\milanesa-pollo.jpg" = "Milanesa D Pollo"
    "images\menu\arroz-de-mar.jpg" = "Arroz De Mar"
    
    # Seafood Specialties
    "images\menu\filete-pescado.jpg" = "Filete De Pescado"
    "images\menu\pies-secos.jpg" = "Pies Secos-Pies Mojados"
    "images\menu\bote-langosta.jpg" = "Bote D Langosta"
    "images\menu\bacalao.jpg" = "Bacalao Gurmet"
    
    # Salads
    "images\menu\loco-cesar.jpg" = "Loco Cesar"
    "images\menu\taco-salad.jpg" = "Taco Salad"
    "images\menu\ensalada-tomate.jpg" = "Ensalada De Tomate"
    "images\menu\ensalada-estacion.jpg" = "Ensalada Estación"
    
    # Sides
    "images\menu\arroz-blanco.jpg" = "Arroz Blanco"
    "images\menu\arroz-coco.jpg" = "Arroz Con Coco"
    "images\menu\moros-cristianos.jpg" = "Moros Y Cristianos"
    "images\menu\platano-maduro.jpg" = "Platano Maduro"
    "images\menu\yuca-mojo.jpg" = "Yuca Con Mojo"
    
    # Desserts
    "images\menu\guava-pastry.jpg" = "Pastelitos de Guayaba"
    "images\menu\rice-pudding.jpg" = "Arroz con Leche"
    
    # Beverages
    "images\menu\cafe-con-leche.jpg" = "Café con Leche"
    "images\menu\tropical-juice.jpg" = "Tropical Juices"
}

foreach ($key in $menuImages.Keys) {
    Create-PlaceholderImage -outputPath $key -text $menuImages[$key] -width 300 -height 200 -backgroundColor "#DB222A"
}

Write-Host "All placeholder images have been created."
