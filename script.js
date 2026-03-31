// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add a fun message when the page loads
window.addEventListener('load', () => {
    console.log('%cHey! Welcome to Aaru\'s special page! 💕✨', 'font-size: 20px; color: #ff69b4; font-weight: bold;');
});

// Image loading animation
const images = document.querySelectorAll('.gallery-item img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.animation = 'fadeInUp 0.6s ease';
    });
});

// Add a subtle parallax effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    header.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
});