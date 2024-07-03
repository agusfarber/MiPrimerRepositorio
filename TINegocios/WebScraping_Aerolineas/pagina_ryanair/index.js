const puppeteer = require('puppeteer');

(async () => {
    
    const browser = await puppeteer.launch({
        headless: false, // false: se abre el navegador - true: no se abre el navegador
        args: ['--window-size=1920,1080'] // Establece el tamaño de la ventana
    }); 

    //abrir una nueva pagina
    const page = await browser.newPage(); 
    
    //entrar a la pagina de ryanair
    await page.goto('https://onlineform.ryanair.com/es/es/eu-261', { waitUntil: 'networkidle2', timeout: 60000 }); 

    // Esperar
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000);
        });
    });

    // Esperar a que el botón de rechazar todas las cookies esté presente en el DOM
    await page.waitForSelector('.cookie-popup-with-overlay__button-settings[data-ref="cookie.accept-all"]');

    // Hacer clic en el botón de rechazar todas las cookies
    await page.click('.cookie-popup-with-overlay__button-settings[data-ref="cookie.accept-all"]');

    // Esperar a que el botón de iniciar sesión esté presente en el DOM
    //await page.waitForSelector('.lg-span-cols-6.sm-span-cols-12.ry-button--full.ry-button--flat-yellow');

    // Hacer clic en el botón de iniciar sesión
    //await page.click('.lg-span-cols-6.sm-span-cols-12.ry-button--full.ry-button--flat-yellow');

    //await browser.close(); //cierra el navegador
})();