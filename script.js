// Smooth scrolling for navigation
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        let valid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        // Reset previous errors
        [name, email, message].forEach(input => {
            input.style.borderColor = '#ddd';
        });
        // Name validation
        if (!name.value.trim()) {
            name.style.borderColor = 'red';
            valid = false;
        }
        // Email validation (basic)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value)) {
            email.style.borderColor = 'red';
            valid = false;
        }
        // Message validation
        if (!message.value.trim()) {
            message.style.borderColor = 'red';
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        } else {
            alert('Thank you for your message!');
        }
    });
} 