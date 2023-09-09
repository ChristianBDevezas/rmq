const figureList = document.querySelectorAll("figure.container__images__item[data-url]");

if(figureList.length > 0) {
    figureList.forEach(figure => {
        figure.addEventListener('click', (eClick) => {
            const url = figure.getAttribute('data-url');

            if(url.match(/^http/) instanceof Array) {
                localStorage.setItem(keyPage, url);

                console.log("localStorage.getItem(keyPage)", localStorage.getItem(keyPage));
                window.location.href = pageDetalhes;
            }
        });
    });
}