const urlPage = localStorage.getItem(keyPage);
const jsonContainerElement = document.querySelector('.json-content');
const titleElement = document.querySelector('.title');

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

        let text = JSON.stringify(json);
        text = text.replace(/,/g, ", ");

        jsonContainerElement.innerHTML = text;
    })

// fetch("https://rickandmortyapi.com/api", {
//     method:"GET",
//     redirect:"follow"
// })
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));