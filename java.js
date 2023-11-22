    // Constantes
    const URL_INSTAGRAM = "https://www.instagram.com/evelynreynails"
    
    let mostrarMensaje = true;

    if (mostrarMensaje) {
        alert('No te olvides de seguirme en la página de contacto!');
    }
    window.onload = function() {
        const edadMinima = 18;

        function verificarEdad() {
            const edadUsuario = parseInt(prompt("Por favor, ingresa tu edad:"));
            
            if (edadUsuario >= edadMinima) {
                // Permitir acceso
                alert("¡Bienvenido/a mi pagina de manicuria!!");
            } else {
                // redirije a otra pagina si no tiene edad requerida
                alert("Lo siento, debes ser mayor de 18 años para acceder a esta página.");
                window.location.href = "https://www.paginanoapta.com"; // Redirige a una página no apta
            }
        }

        verificarEdad();
    };
    