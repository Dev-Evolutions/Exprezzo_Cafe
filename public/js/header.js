const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
    
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});