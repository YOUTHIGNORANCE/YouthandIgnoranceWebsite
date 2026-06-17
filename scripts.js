document.addEventListener("DOMContentLoaded", () => {
    // Prevent Default Form Submission (For demo purposes)
    const form = document.getElementById('contactForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message simulated! Ready to connect to a backend.');
            form.reset();
        });
    }
});