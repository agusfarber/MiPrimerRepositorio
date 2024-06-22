const puppeteer = require('puppeteer');


(async () => {
    
    const browser = await puppeteer.launch({
        headless: false, // false: se abre el navegador - true: no se abre el navegador
        args: ['--window-size=1920,1080'] // Establece el tamaño de la ventana
    }); 

    const page = await browser.newPage(); //abre una pestaña
    
    await page.goto('https://quotes.toscrape.com/'); //nos lleva a esta pagina 

    await page.screenshot({path: 'captura1.jpg', fullPage: true }); //saca una captura de pantalla y la guarda con ese nombre

    const quotes = await page.evaluate(() => { //inicia una funcion anonima que se ejecuta en el contexto de la pagina web cargada. page.evaluate toma una funcion como argumento y la ejecuta dentro de la pagina
        const quoteElements = document.querySelectorAll('.quote'); //selecciona todos los elementos que tienen la clase .quote y los guarda en quoteElements, aca devuelve una nodelist de todos los elementos que coinciden con el selector CSS .quote

        const quotesList = []; //se crea un array vacio que almacenara los objetos de cita y autor extraidos de la pagina
        quoteElements.forEach((quoteElement) => { //se usa forEach para iterar sobre cada elemento en la NodeList quoteElements
            const text = quoteElement.querySelector('.text').innerText; //dentro de cada quoteElement, se selecciona el sub-elemento con la clase .text (que contiene la cita) y se extrae su contenido de texto con innerText
            const author = quoteElement.querySelector('.author').innerText; //similarmente a lo anterior, se selecciona el sub-elemento con la clase .author (que contiene el nombre del autor) y se extrae su contenido de texto con innerText
            quotesList.push({ text, author }); //un objeto con las propiedades text y author se crea y se añade al array quotesList
        })

        return quotesList; //la funcion anonima retorna el array quotesList que contiene todos los objetos de citas y autores extraidos. El valor retornado por page.evaluate (en este caso, quotesList) se asigna a la variable quotes en el contexto del codigo de puppeteer
    });

    console.log(quotes); //imprimir las citas extraídas

    await browser.close(); //cierra el navegador
})();
