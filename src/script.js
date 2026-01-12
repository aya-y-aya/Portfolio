// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    // Add click event
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});