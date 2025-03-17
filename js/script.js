// Translation data
const translations = {
    en: {
        home: "Home",
        menu: "Menu",
        about: "About",
        gallery: "Gallery",
        contact: "Contact",
        welcome: "Welcome to Cuban's Coco Loco",
        authenticCuisine: "Authentic Cuban Cuisine in Cape Coral",
        viewMenu: "View Menu",
        makeReservation: "Make Reservation",
        authCuisineFeature: "Authentic Cuisine",
        tradFlavors: "Traditional Cuban flavors made with fresh ingredients",
        specialtyDrinks: "Specialty Drinks",
        cocktails: "Refreshing cocktails with a tropical twist",
        vibrantAtmosphere: "Vibrant Atmosphere",
        enjoyAmbiance: "Enjoy the warm, welcoming ambiance of Cuba",
        experienceCuba: "Experience Cuba in Cape Coral",
        cubansFlavors: "Cuban's Coco Loco brings authentic Cuban flavors to Southwest Florida. Our family recipes have been passed down through generations, offering you a genuine taste of Cuban cuisine.",
        dishesDesc: "From our perfectly seasoned Ropa Vieja to our irresistible Cuban sandwiches, each dish is prepared with love and tradition.",
        learnMore: "Learn More",
        popularDishes: "Our Popular Dishes",
        cubanSandwich: "Cuban Sandwich",
        cubanSandwichDesc: "Slow-roasted pork, ham, swiss cheese, pickles, and mustard on pressed Cuban bread",
        ropaVieja: "Ropa Vieja",
        ropaViejaDesc: "Shredded beef in a flavorful tomato sauce with peppers and onions",
        lechonAsado: "Lechon Asado",
        lechonAsadoDesc: "Slow-roasted marinated pork with mojo sauce",
        viewFullMenu: "View Full Menu",
        hoursLocation: "Hours & Location",
        openingHours: "Opening Hours",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        makeReservationHeader: "Make a Reservation",
        yourName: "Your Name",
        emailAddress: "Email Address",
        phoneNumber: "Phone Number",
        date: "Date",
        time: "Time",
        numberOfGuests: "Number of Guests",
        specialRequests: "Special Requests",
        bookTable: "Book Table",
        authCuisineFooter: "Authentic Cuban cuisine in the heart of Cape Coral.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        followUs: "Follow Us",
        allRightsReserved: "All rights reserved."
    },
    es: {
        home: "Inicio",
        menu: "Menú",
        about: "Nosotros",
        gallery: "Galería",
        contact: "Contacto",
        welcome: "Bienvenidos a Cuban's Coco Loco",
        authenticCuisine: "Auténtica Cocina Cubana en Cape Coral",
        viewMenu: "Ver Menú",
        makeReservation: "Hacer Reservación",
        authCuisineFeature: "Cocina Auténtica",
        tradFlavors: "Sabores tradicionales cubanos hechos con ingredientes frescos",
        specialtyDrinks: "Bebidas Especiales",
        cocktails: "Cócteles refrescantes con un toque tropical",
        vibrantAtmosphere: "Ambiente Vibrante",
        enjoyAmbiance: "Disfrute del cálido y acogedor ambiente de Cuba",
        experienceCuba: "Experimenta Cuba en Cape Coral",
        cubansFlavors: "Cuban's Coco Loco trae auténticos sabores cubanos al suroeste de Florida. Nuestras recetas familiares han pasado de generación en generación, ofreciéndole un genuino sabor de la cocina cubana.",
        dishesDesc: "Desde nuestra perfectamente sazonada Ropa Vieja hasta nuestros irresistibles Sándwiches Cubanos, cada plato se prepara con amor y tradición.",
        learnMore: "Más Información",
        popularDishes: "Nuestros Platos Populares",
        cubanSandwich: "Sándwich Cubano",
        cubanSandwichDesc: "Cerdo asado lentamente, jamón, queso suizo, pepinillos y mostaza en pan cubano prensado",
        ropaVieja: "Ropa Vieja",
        ropaViejaDesc: "Carne de res deshebrada en una sabrosa salsa de tomate con pimientos y cebollas",
        lechonAsado: "Lechón Asado",
        lechonAsadoDesc: "Cerdo marinado y asado lentamente con salsa mojo",
        viewFullMenu: "Ver Menú Completo",
        hoursLocation: "Horario y Ubicación",
        openingHours: "Horario de Apertura",
        monday: "Lunes",
        tuesday: "Martes",
        wednesday: "Miércoles",
        thursday: "Jueves",
        friday: "Viernes",
        saturday: "Sábado",
        sunday: "Domingo",
        makeReservationHeader: "Hacer una Reservación",
        yourName: "Su Nombre",
        emailAddress: "Correo Electrónico",
        phoneNumber: "Número de Teléfono",
        date: "Fecha",
        time: "Hora",
        numberOfGuests: "Número de Invitados",
        specialRequests: "Solicitudes Especiales",
        bookTable: "Reservar Mesa",
        authCuisineFooter: "Auténtica cocina cubana en el corazón de Cape Coral.",
        quickLinks: "Enlaces Rápidos",
        contactUs: "Contáctenos",
        followUs: "Síganos",
        allRightsReserved: "Todos los derechos reservados."
    }
};

// Functions for theme toggle and language switcher
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.querySelector('.theme-toggle')?.classList.add('dark');
    }
}

function toggleTheme() {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        document.querySelector('.theme-toggle')?.classList.remove('dark');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.theme-toggle')?.classList.add('dark');
    }
}

function initializeLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    changeLanguage(savedLang);
}

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Update active class on language buttons
    const langButtons = document.querySelectorAll('.language-switcher button');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder attributes for form elements
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update document language attribute
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme from localStorage or default to light
    initializeTheme();
    
    // Initialize language from localStorage or default to English
    initializeLanguage();
    
    // Add event listeners for theme toggle and language switcher
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    const langButtons = document.querySelectorAll('.language-switcher button');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-menu') && !event.target.closest('.nav-links')) {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation and submission
    const reservationForm = document.querySelector('.reservation-form');
    const contactForm = document.querySelector('.contact-form');
    
    // Handle reservation form submission
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            
            if (!name || !email || !phone || !date || !time || !guests) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Check email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your reservation! We will contact you shortly to confirm.');
            this.reset();
        });
    }
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Check email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you as soon as possible.');
            this.reset();
        });
    }
    
    // Menu page category filter
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuSections = document.querySelectorAll('.menu-section');
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                if (category === 'all') {
                    // Show all menu sections
                    menuSections.forEach(section => section.style.display = 'block');
                } else {
                    // Show only the selected category
                    menuSections.forEach(section => {
                        if (section.getAttribute('data-category') === category) {
                            section.style.display = 'block';
                        } else {
                            section.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    // Gallery filter
    const galleryFilterButtons = document.querySelectorAll('.gallery-filter button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryFilterButtons.length > 0) {
        galleryFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                galleryFilterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                if (filter === 'all') {
                    // Show all gallery items
                    galleryItems.forEach(item => item.style.display = 'block');
                } else {
                    // Show only the selected filter
                    galleryItems.forEach(item => {
                        if (item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    }
    
    // Lightbox for gallery (very simple implementation)
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    if (galleryImages.length > 0) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                const lightbox = document.createElement('div');
                lightbox.classList.add('lightbox');
                
                const lightboxImage = document.createElement('img');
                lightboxImage.src = this.src;
                
                const closeButton = document.createElement('div');
                closeButton.classList.add('lightbox-close');
                closeButton.innerHTML = '&times;';
                
                lightbox.appendChild(lightboxImage);
                lightbox.appendChild(closeButton);
                document.body.appendChild(lightbox);
                
                // Prevent scrolling when lightbox is open
                document.body.style.overflow = 'hidden';
                
                // Close lightbox when clicking the close button or outside the image
                lightbox.addEventListener('click', function(e) {
                    if (e.target !== lightboxImage) {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = 'auto';
                    }
                });
            });
        });
    }
});
