const puppeteer = require('puppeteer');

(async () => {
    
    const browser = await puppeteer.launch({
        headless: false, // false: se abre el navegador - true: no se abre el navegador
        args: ['--window-size=1920,1080'] // Establece el tamaño de la ventana
    }); 

    //abrir una nueva pagina
    const page = await browser.newPage(); 
    
    //entrar a la pagina de vueling
    await page.goto('https://www.vueling.com/es/somos-vueling/contacto/gestiones?helpCenterFlow=EU261-Claims', { waitUntil: 'networkidle2', timeout: 60000 }); 

    // Esperar
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Esperar a que el botón de rechazar todas las cookies esté presente en el DOM
    await page.waitForSelector('#onetrust-reject-all-handler');

    // Hacer clic en el botón de rechazar todas las cookies
    await page.click('#onetrust-reject-all-handler');

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Esperar a que el botón de código y email esté presente en el DOM
    await page.waitForSelector('.ac-pushButton');

    // Hacer clic en el botón de código y email
    await page.click('.ac-pushButton[aria-label="Código de reserva y e-mail"]');

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Esperar a que el campo de texto de código esté presente en el DOM
    await page.waitForSelector('.ac-input.ac-textInput.ac-input-required');

    // Escribir texto dentro del campo de texto
    await page.type('.ac-input.ac-textInput.ac-input-required[type="text"]', 'JNTBNE');

    // Escribir texto dentro del campo de texto
    await page.type('.ac-input.ac-textInput.ac-input-required[type="email"]', 'marc_munar@hotmail.com');

    // Hacer clic en el botón de enviar
    await page.click('.ac-pushButton[aria-label="Enviar"]');

    // Esperar a que el botón "por retraso en el aeropuerto" esté presente en el DOM
    await page.waitForSelector('.webchat-quick-reply-template-reply.cognigy-webchat-1459kxp');

    // Hacer clic en el botón "por retraso en el aeropuerto"
    await page.evaluate(() => {
        const buttons = document.querySelectorAll('.webchat-quick-reply-template-reply.cognigy-webchat-1459kxp');
        for (let button of buttons) {
            if (button.innerText.includes('Por retraso en el aeropuerto')) {
                button.click();
                break;
            }
        }
    });

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 5000);
        });
    });

    // Hacer clic en el botón "de mas de 3 horas"
    await page.evaluate(() => {
        const buttons = document.querySelectorAll('.webchat-quick-reply-template-reply.cognigy-webchat-1459kxp');
        for (let button of buttons) {
            if (button.innerText.includes('De más de 3 horas')) {
                button.click();
                break;
            }
        }
    });

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Esperar a que el botón "por retraso en el aeropuerto" esté presente en el DOM
    await page.waitForSelector('#name .ac-input.ac-textInput.ac-input-required[type="text"]');

    // Hacer clic en el campo de texto dentro del div con id "nombre"
    await page.click('#name .ac-input.ac-textInput.ac-input-required[type="text"]');
    await page.type('#name .ac-input.ac-textInput.ac-input-required[type="text"]', 'Alexandra');
    
    // Hacer clic en el campo de texto dentro del div con id "apellido"
    await page.click('#surname .ac-input.ac-textInput.ac-input-required[type="text"]');
    await page.type('#surname .ac-input.ac-textInput.ac-input-required[type="text"]', 'Munar Parra');


    // Hacer clic en el botón "Enviar" dentro del div ac-actionSet
    await page.click('.regular-message.bot.cognigy-webchat-1197twy .ac-actionSet[role="menubar"] button[aria-label="Enviar"].ac-pushButton.style-default[tabindex="0"]');

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 5000);
        });
    });

    // Ejecutar código en el contexto de la página para hacer clic en el botón
    await page.evaluate(() => {
        const buttons = document.querySelectorAll('.webchat-message-row.bot.cognigy-webchat-ov9ndn .webchat-quick-reply-template-root .webchat-quick-reply-template-header-message.cognigy-webchat-1d7syn4 .webchat-quick-reply-template-replies-container.cognigy-webchat-xp9poc .webchat-quick-reply-template-reply.cognigy-webchat-1459kxp');
        for (let button of buttons) {
            const span = button.querySelector('span');
            if (span && span.innerText.trim() === 'Sí') {
                button.click();
                break; // Terminar el bucle una vez que se haya encontrado y hecho clic en el botón correcto
            }
        }
    });

    // Esperar a que el botón "Barcelona-Almeria" esté presente en el DOM
    await page.waitForSelector('.webchat-quick-reply-template-replies-container.cognigy-webchat-xp9poc .webchat-quick-reply-template-reply.cognigy-webchat-1459kxp.webchat-quick-reply-template-reply-image-and-buttons');

    // Hacer clic en el botón "Barcelona-Almeria" 
    await page.click('.webchat-quick-reply-template-replies-container.cognigy-webchat-xp9poc .webchat-quick-reply-template-reply.cognigy-webchat-1459kxp.webchat-quick-reply-template-reply-image-and-buttons');

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Hacer clic en el botón para escribir
    await page.click('.webchat-input.cognigy-webchat-7dbdye .webchat-input-menu-form.cognigy-webchat-wx799w .webchat-input-message-input.cognigy-webchat-138yhey');

    // Escribir texto dentro del campo de texto
    await page.type('.webchat-input.cognigy-webchat-7dbdye .webchat-input-menu-form.cognigy-webchat-wx799w .webchat-input-message-input.cognigy-webchat-138yhey', 'marc_munar@hotmail.com');
    
    // Hacer clic en el botón para enviar
    await page.click('.webchat-input-button-send.cognigy-webchat-1nmmhvj');

    // Esperar a que el elemento del selector esté presente
    await page.waitForSelector('#phonePrefix .ac-input-container .ac-input.ac-multichoiceInput.ac-choiceSetInput-compact.ac-input-required');

    // Seleccionar el prefijo del país
    await page.select('#phonePrefix .ac-input-container .ac-input.ac-multichoiceInput.ac-choiceSetInput-compact.ac-input-required', '+34');

    // Escribir texto dentro del campo de texto
    await page.type('#phone .ac-input-container .ac-input.ac-textInput.ac-input-required', '659217222');
    
    // Hacer clic en el botón para enviar
    await page.click('.ac-pushButton.style-default:not(.disabledButton)');

    // Esperar a que el elemento del selector esté presente
    await page.waitForSelector('.ac-pushButton.style-default[aria-label="Enviar comentario"]')

    // Hacer clic en el botón para enviar comentario
    await page.click('.ac-pushButton.style-default[aria-label="Enviar comentario"]');

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 5000);
        });
    });

    // Ejecuta el script en el contexto de la página
    const text = await page.evaluate(() => {
        const elements = [...document.querySelectorAll(".regular-message.bot")];
        let extractedText = elements.slice(-1)[0].innerText.split(" ")[12];
    
    // Quita el último carácter si es un punto
    if (extractedText.endsWith('.')) {
        extractedText = extractedText.slice(0, -1);
    }

        return extractedText;
    });

    // Muestra el texto en la consola
    console.log(text);
    

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 9000);
        });
    });

    await browser.close(); //cierra el navegador
})();