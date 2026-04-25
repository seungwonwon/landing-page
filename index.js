// index.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const iconPath = document.getElementById('menu-icon');
    const mobileLinks = menu.querySelectorAll('a');

    const toggleMenu = () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            // Hamburger icon
            iconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
            // Close (X) icon
            iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    };

    if(btn) {
        btn.addEventListener('click', toggleMenu);
    }

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!menu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.remove('py-2');
        }
    });

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.fade-in-up, .section-reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    // Trigger once on load
    revealOnScroll();
    
    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);
});
