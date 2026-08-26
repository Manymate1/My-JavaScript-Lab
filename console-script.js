/* ¡ CODIGO HECHO CON IA

    no pretendo tomar credito por este codigo.

    este codigo muestra la consola en el html.

*/


        // 1. Guardamos la función original de la consola

        const originalLog = console.log;
        const originalError = console.error;
        const consoleContainer = document.getElementById('console-log');

        // 2. Sobrescribimos console.log

        console.log = function(...args) {
            originalLog.apply(this, args); // Mantiene el registro en la consola real del navegador
            const message = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' ');
            consoleContainer.innerHTML += `<div>${message}</div>`;
            consoleContainer.scrollTop = consoleContainer.scrollHeight; // Auto-scroll hacia abajo
        };

        // 3. Sobrescribimos opcionalmente console.error para errores en rojo

        console.error = function(...args) {
            originalError.apply(this, args);
            const message = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' ');
            consoleContainer.innerHTML += `<div class="log-error">${message}</div>`;
            consoleContainer.scrollTop = consoleContainer.scrollHeight;
        };

        // --- PRUEBAS DE FUNCIONAMIENTO ---

        console.log("¡Hola! Este mensaje viene desde la pseudo-consola.");

        console.log("Puedes mostrar números:", 42);

        console.error("Este es un mensaje de error simulado.");

