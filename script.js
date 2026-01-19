document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Accessibility: Aria states could be added here
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, h1, h2, p, .img-frame').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Dynamic Greeting based on time
    const greeting = document.getElementById('greeting');
    if(greeting) {
        const hour = new Date().getHours();
        if(hour < 12) greeting.innerText = "Good Morning";
        else if(hour < 18) greeting.innerText = "Good Afternoon";
        else greeting.innerText = "Good Evening";
    }
});