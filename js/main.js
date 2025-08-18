// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
});

// Smooth scroll navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});

// Portfolio filter 
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#portfolio .flex button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('text-gray-400');
            });
            this.classList.add('bg-primary', 'text-white');
            this.classList.remove('text-gray-400');
        });
    });
});

// Parallax effect 
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.setProperty('--scroll-y', `${scrolled * speed}px`);
        });
    });
});

// View work scroll 
document.addEventListener('DOMContentLoaded', function() {
    const viewWorkBtn = document.getElementById('view-work-btn');
    viewWorkBtn.addEventListener('click', function() {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});