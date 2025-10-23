// ========================================
// NAVEGACIÓN SMOOTH SCROLL
// ========================================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Cerrar menú móvil si está abierto
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
            
            // Actualizar link activo
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// ========================================
// MENÚ MÓVIL TOGGLE
// ========================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// ========================================
// ACORDEONES
// ========================================

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const wasActive = accordionItem.classList.contains('active');
        
        // Cerrar todos los acordeones
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abrir el clickeado si no estaba activo
        if (!wasActive) {
            accordionItem.classList.add('active');
        }
    });
});

// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// INTERSECTION OBSERVER PARA NAVEGACIÓN ACTIVA
// ========================================

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ========================================
// ANIMACIONES AL SCROLL (opcional)
// ========================================

const animateOnScroll = () => {
    const cards = document.querySelectorAll('.content-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Inicializar opacidad de las cards
document.querySelectorAll('.content-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ========================================
// CONSOLE INFO
// ========================================

console.log('%c📚 Análisis Pedagógico Comparativo', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cMaestría en Educación - Módulo 2', 'font-size: 14px; color: #64748b;');
console.log('%cAutores: Ulises Parada & Santiago Hernández', 'font-size: 12px; color: #64748b;');