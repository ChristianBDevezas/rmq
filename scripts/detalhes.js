const urlPage = localStorage.getItem(keyPage);
const jsonContainerElement = document.querySelector('.json-content');
const titleElement = document.querySelector('.title');
// const imgElement = document.createElement('img');
const windowWidth = window.outerWidth;

if(jsonContainerElement instanceof HTMLElement === false) {
    throw 'Isto não é uma tag html';
}

if(urlPage.match(/^http/) instanceof Array === false) {
    throw "Isto não é um url";
}

fetch(urlPage, {
    method:"GET",
    redirect:"follow"
})
    .then(response => {
        console.log('response.status', response.status);
        return response.json()
    })
    .then(json => {
        console.log('json', json);

        titleElement.innerHTML = json.name;
        
        // imgElement.setAttribute('src', json.image);
        // titleElement.insertAdjacentElement('afterend', imgElement);

        let text = JSON.stringify(json);
        // text = text.replace(/,/g, "<br>, ");
        text = text.replace(/,/g, ", ");

        if(windowWidth < 700) {
            text = text.replace(/,/g, "<br>, ");
        }

        jsonContainerElement.innerHTML = text;
    })

// fetch("https://rickandmortyapi.com/api", {
//     method:"GET",
//     redirect:"follow"
// })
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));