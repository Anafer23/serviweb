document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Validación de los campos del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !service || !message) {
            alert('Por favor, complete todos los campos obligatorios.');
            return;



        // Simulación del envío del formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');

        // Redireccionar a una página de agradecimiento
        window.location.href = "gracias.html";
    });
});
