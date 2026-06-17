document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Fade-In Animation for Gallery
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Grab all elements with the 'fade-in' class and observe them
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 2. Prevent Default Form Submission (For demo purposes)
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // You can replace this with actual form submission logic (e.g. Fetch API to backend)
            alert('Message simulated! Ready to connect to a backend.');
            form.reset();
        });
    }
});