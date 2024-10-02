const startTime = performance.now();

let domContentLoadedTime, loadTime;

document.addEventListener('DOMContentLoaded', (event) => {
    domContentLoadedTime = performance.now();
    console.log(`DOMContentLoaded время: ${domContentLoadedTime - startTime} мс`);
});

window.addEventListener('load', (event) => {
    loadTime = performance.now();
    console.log(`Полное время загрузки: ${loadTime - startTime} мс`);
    
    console.log(`
    Итоговые результаты:
    - Время до DOMContentLoaded: ${domContentLoadedTime - startTime} мс
    - Время до полной загрузки: ${loadTime - startTime} мс
    - Разница между событиями: ${loadTime - domContentLoadedTime} мс
    `);
});