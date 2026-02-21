document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove('nav-scrolled');
        }
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle (If button exists)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // WhatsApp Flow
    const waButton = document.getElementById('wa-button');
    const waPopup = document.getElementById('wa-popup');
    const waIcon = document.getElementById('wa-icon');
    const waClose = document.getElementById('wa-close');
    const waLabel = document.getElementById('wa-label');

    if (waButton && waPopup) {
        waButton.addEventListener('click', () => {
            const isVisible = waPopup.classList.contains('wa-popup-visible');
            
            if (!isVisible) {
                // Open
                waPopup.classList.add('wa-popup-visible');
                waIcon.classList.add('hidden');
                waClose.classList.remove('hidden');
                waLabel.classList.add('wa-label-hide');
                waButton.classList.add('wa-active');
            } else {
                // Close
                waPopup.classList.remove('wa-popup-visible');
                waLabel.classList.remove('wa-label-hide');
                waIcon.classList.remove('hidden');
                waClose.classList.add('hidden');
                waButton.classList.remove('wa-active');
            }
        });
    }
});
