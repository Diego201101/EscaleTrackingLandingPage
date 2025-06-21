document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    
    // Función para el menú hamburguesa
    menuToggle.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para mostrar/ocultar un menú
        console.log('Menú clickeado');
        // Ejemplo: document.querySelector('.nav-menu').classList.toggle('active');
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