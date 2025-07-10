document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const logo = document.getElementById('logo');
    
    // Menú hamburguesa
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Refrescar página al hacer clic en el logo
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = window.location.origin + window.location.pathname;
    });
    
    // Cerrar menú al hacer clic en un enlace (para móviles)
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Efectos para los badges de descarga
    const badges = document.querySelectorAll('.badge-link');
    
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'translateY(-5px)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'translateY(0)';
        });
        
        // Para dispositivos táctiles
        badge.addEventListener('touchstart', () => {
            badge.style.transform = 'translateY(-5px)';
        });
        
        badge.addEventListener('touchend', () => {
            badge.style.transform = 'translateY(0)';
        });
    });
});
