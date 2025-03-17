// JavaScript to generate placeholder images as HTML files
// This script uses plain HTML which can be opened in any browser

const fs = require('fs');
const path = require('path');

// Function to create a placeholder image as HTML
function createPlaceholderImage(outputPath, text, options = {}) {
    const {
        width = 600,
        height = 400,
        backgroundColor = "#70A9A1",
        textColor = "white"
    } = options;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${text} - Placeholder Image</title>
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
</html>`;

    // Convert jpg path to html
    const htmlPath = outputPath.replace('.jpg', '.html');
    
    // Ensure directory exists
    const directory = path.dirname(htmlPath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    // Write the HTML file
    fs.writeFileSync(htmlPath, html);
    console.log(`Created placeholder HTML: ${htmlPath}`);
}

// Create all the required image placeholders

// Home page images
const homeImages = {
    "images/restaurant-interior.jpg": "Restaurant Interior",
    "images/cuban-sandwich.jpg": "Cuban Sandwich",
    "images/ropa-vieja.jpg": "Ropa Vieja",
    "images/lechon-asado.jpg": "Lechon Asado"
};

for (const [filePath, text] of Object.entries(homeImages)) {
    createPlaceholderImage(filePath, text);
}

// About page images
const aboutImages = {
    "images/about/restaurant-front.jpg": "Restaurant Front",
    "images/about/chef-cooking.jpg": "Chef Cooking",
    "images/about/dining-area.jpg": "Dining Area",
    "images/about/family-meal.jpg": "Family Meal"
};

for (const [filePath, text] of Object.entries(aboutImages)) {
    createPlaceholderImage(filePath, text, { backgroundColor: "#9EC1A3" });
}

// Team images
const teamImages = {
    "images/team/owner.jpg": "Miguel Hernandez - Owner & Head Chef",
    "images/team/chef.jpg": "Elena Rodriguez - Executive Chef",
    "images/team/manager.jpg": "Carlos Diaz - Restaurant Manager"
};

for (const [filePath, text] of Object.entries(teamImages)) {
    createPlaceholderImage(filePath, text, { 
        width: 300, 
        height: 400, 
        backgroundColor: "#CFE0C3" 
    });
}

// Testimonial images
const testimonialImages = {
    "images/testimonials/customer1.jpg": "Sarah M.",
    "images/testimonials/customer2.jpg": "John and Lisa K.",
    "images/testimonials/customer3.jpg": "Roberto C."
};

for (const [filePath, text] of Object.entries(testimonialImages)) {
    createPlaceholderImage(filePath, text, { 
        width: 150, 
        height: 150, 
        backgroundColor: "#3B5249" 
    });
}

// Gallery food images
const galleryFoodImages = {
    "images/gallery/cuban-sandwich.jpg": "Cuban Sandwich",
    "images/gallery/ropa-vieja-plate.jpg": "Ropa Vieja Plate",
    "images/gallery/lechon-asado.jpg": "Lechon Asado",
    "images/gallery/empanadas.jpg": "Empanadas",
    "images/gallery/tres-leches.jpg": "Tres Leches Cake",
    "images/gallery/flan.jpg": "Flan"
};

for (const [filePath, text] of Object.entries(galleryFoodImages)) {
    createPlaceholderImage(filePath, text, { backgroundColor: "#AC4B1C" });
}

// Gallery drink images
const galleryDrinkImages = {
    "images/gallery/mojito.jpg": "Mojito",
    "images/gallery/cuba-libre.jpg": "Cuba Libre",
    "images/gallery/cuban-coffee.jpg": "Cuban Coffee",
    "images/gallery/tropical-drinks.jpg": "Tropical Drinks"
};

for (const [filePath, text] of Object.entries(galleryDrinkImages)) {
    createPlaceholderImage(filePath, text, { backgroundColor: "#F3752B" });
}

// Gallery restaurant images
const galleryRestaurantImages = {
    "images/gallery/restaurant-exterior.jpg": "Restaurant Exterior",
    "images/gallery/dining-area-1.jpg": "Dining Area",
    "images/gallery/dining-area-2.jpg": "Dining Area Night",
    "images/gallery/bar-area.jpg": "Bar Area",
    "images/gallery/kitchen.jpg": "Kitchen"
};

for (const [filePath, text] of Object.entries(galleryRestaurantImages)) {
    createPlaceholderImage(filePath, text, { backgroundColor: "#617073" });
}

// Gallery event images
const galleryEventImages = {
    "images/gallery/live-music.jpg": "Live Music Night",
    "images/gallery/salsa-night.jpg": "Salsa Night",
    "images/gallery/private-party.jpg": "Private Party",
    "images/gallery/cooking-class.jpg": "Cuban Cooking Class"
};

for (const [filePath, text] of Object.entries(galleryEventImages)) {
    createPlaceholderImage(filePath, text, { 
        backgroundColor: "#D5C7BC", 
        textColor: "#333" 
    });
}

// Instagram images
const instagramImages = {
    "images/instagram/insta1.jpg": "Instagram Post 1",
    "images/instagram/insta2.jpg": "Instagram Post 2",
    "images/instagram/insta3.jpg": "Instagram Post 3",
    "images/instagram/insta4.jpg": "Instagram Post 4",
    "images/instagram/insta5.jpg": "Instagram Post 5",
    "images/instagram/insta6.jpg": "Instagram Post 6"
};

for (const [filePath, text] of Object.entries(instagramImages)) {
    createPlaceholderImage(filePath, text, { 
        width: 300, 
        height: 300, 
        backgroundColor: "#E16036" 
    });
}

// Menu images
const menuImages = {
    // Appetizers
    "images/menu/tostones-boniato.jpg": "Tostones De Boniato",
    "images/menu/empanada-cubano.jpg": "Empanada Sandwich Cubano",
    "images/menu/croqueta-pulpo.jpg": "Croqueta De Pulpo Y Camarones",
    "images/menu/croqueta-quesos.jpg": "Croqueta 4 Quesos",
    "images/menu/coconut-shrimp.jpg": "Coconut Shrimp",
    "images/menu/camaron-ajillo.jpg": "Camarón Al Ajillo",
    
    // Cold Starters
    "images/menu/coctel-camarones.jpg": "Coctel De Camarones",
    "images/menu/ceviche.jpg": "Ceviche",
    "images/menu/carpaccio.jpg": "Carpaccio De Res",
    
    // Entrées
    "images/menu/sabana-encebollada.jpg": "Sabana Encebollada",
    "images/menu/churrasco.jpg": "Guajiro Steak (Churrasco)",
    "images/menu/milanesa-pollo.jpg": "Milanesa D Pollo",
    "images/menu/arroz-de-mar.jpg": "Arroz De Mar",
    
    // Seafood Specialties
    "images/menu/filete-pescado.jpg": "Filete De Pescado",
    "images/menu/pies-secos.jpg": "Pies Secos-Pies Mojados",
    "images/menu/bote-langosta.jpg": "Bote D Langosta",
    "images/menu/bacalao.jpg": "Bacalao Gurmet",
    
    // Salads
    "images/menu/loco-cesar.jpg": "Loco Cesar",
    "images/menu/taco-salad.jpg": "Taco Salad",
    "images/menu/ensalada-tomate.jpg": "Ensalada De Tomate",
    "images/menu/ensalada-estacion.jpg": "Ensalada Estación",
    
    // Sides
    "images/menu/arroz-blanco.jpg": "Arroz Blanco",
    "images/menu/arroz-coco.jpg": "Arroz Con Coco",
    "images/menu/moros-cristianos.jpg": "Moros Y Cristianos",
    "images/menu/platano-maduro.jpg": "Platano Maduro",
    "images/menu/yuca-mojo.jpg": "Yuca Con Mojo",
    
    // Desserts
    "images/menu/guava-pastry.jpg": "Pastelitos de Guayaba",
    "images/menu/rice-pudding.jpg": "Arroz con Leche",
    "images/menu/flan.jpg": "Flan",
    "images/menu/tres-leches.jpg": "Tres Leches",
    
    // Beverages
    "images/menu/cafe-con-leche.jpg": "Café con Leche",
    "images/menu/tropical-juice.jpg": "Tropical Juices",
    "images/menu/cuban-coffee.jpg": "Cuban Coffee",
    "images/menu/mojito.jpg": "Mojito",
    "images/menu/cuba-libre.jpg": "Cuba Libre"
};

for (const [filePath, text] of Object.entries(menuImages)) {
    createPlaceholderImage(filePath, text, { 
        width: 300, 
        height: 200, 
        backgroundColor: "#DB222A" 
    });
}

console.log("All placeholder HTML files have been created.");
console.log("Open these HTML files in your browser to view the placeholders.");
console.log("You can take screenshots of them as needed for your website.");
