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

const buttonSeeAll = document.querySelector(".container__images__btn");
buttonSeeAll.addEventListener("click", (e) => {
    console.log(e.target, e.target.getAttribute('data-url'));    
    const url = e.target.getAttribute('data-url');
    
    if(url.match(/^http/) instanceof Array) {
        // window.location.href = url;
        window.open(url, '_blank');
    }
});