// Smooth Scroll para los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href'); // Obtiene el ID de la sección
        const targetSection = document.querySelector(targetId); // Selecciona la sección
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    });
});

// Animación de las barras de progreso
document.addEventListener('DOMContentLoaded', () => {
    const barras = document.querySelectorAll('.progreso');
    barras.forEach(barra => {
        const porcentaje = barra.style.width; // Obtiene el porcentaje de la barra
        barra.style.width = '0%'; // Inicia la barra en 0%
        setTimeout(() => {
            barra.style.width = porcentaje; // Anima la barra hasta el porcentaje definido
        }, 100);
    });
});

// Efecto de hover en los proyectos
const proyectos = document.querySelectorAll('.proyecto');
proyectos.forEach(proyecto => {
    proyecto.addEventListener('mouseenter', () => {
        proyecto.style.transform = 'scale(1.05)';
        proyecto.style.transition = 'transform 0.3s ease';
    });
    proyecto.addEventListener('mouseleave', () => {
        proyecto.style.transform = 'scale(1)';
    });
});