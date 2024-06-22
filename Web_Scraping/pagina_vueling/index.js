const puppeteer = require('puppeteer');

(async () => {
    
    const browser = await puppeteer.launch({
        headless: false, // false: se abre el navegador - true: no se abre el navegador
        args: ['--window-size=1920,1080'] // Establece el tamaño de la ventana
    }); 

    //abrir una nueva pagina
    const page = await browser.newPage(); 
    
    //entrar a la pagina de vueling
    await page.goto('https://www.vueling.com/es/somos-vueling/contacto/gestiones?helpCenterFlow=ClaimStatus', { waitUntil: 'networkidle2', timeout: 60000 }); 

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

    // Hacer clic en el campo de texto de código donde se va a escribir
    await page.click('.ac-input.ac-textInput.ac-input-required[type="text"]');

    // Escribir texto dentro del campo de texto
    await page.type('.ac-input.ac-textInput.ac-input-required[type="text"]', 'JNTBNE');

    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Hacer clic en el campo de texto de email donde se va a escribir
    await page.click('.ac-input.ac-textInput.ac-input-required[type="email"]');

    // Escribir texto dentro del campo de texto
    await page.type('.ac-input.ac-textInput.ac-input-required[type="email"]', 'marc_munar@hotmail.com');
    
    // Esperar 
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Hacer clic en el botón de enviar
    await page.click('.ac-pushButton[aria-label="Enviar"]');

    
    //await browser.close(); //cierra el navegador
})();