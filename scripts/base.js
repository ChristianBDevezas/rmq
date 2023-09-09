const keyPage = 'keyPage';
const pageDetalhes = "detalhes.html";

if(typeof localStorage.getItem(keyPage) !== 'string') {
    localStorage.setItem(keyPage, '');
}