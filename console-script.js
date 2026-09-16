/* ¡ CODIGO HECHO CON IA

no pretendo tomar credito por este codigo.

este codigo muestra la consola en el html.

*/

        const originalLog = console.log;
        const originalError = console.error;
        const consoleContainer = document.getElementById('console-log');

        console.log = function(...args) {
            originalLog.apply(this, args); // 
        const message = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' ');
        consoleContainer.innerHTML += `<div>${message}</div>`;
        consoleContainer.scrollTop = consoleContainer.scrollHeight;
        };

        console.error = function(...args) {
                originalError.apply(this, args);
                const message = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : arg)).join(' ');
                consoleContainer.innerHTML += `<div class="log-error">${message}</div>`;
                consoleContainer.scrollTop = consoleContainer.scrollHeight;
        };

        // --- PRUEBAS DE FUNCIONAMIENTO ---



