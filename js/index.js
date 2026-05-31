

const navbar= document.getElementsByClassName("navbar")
const searchContainer= document.getElementsByClassName("search-container")
window.onscroll= () => {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
       console.log(navbar[0])
        navbar[0].classList.add("scrolled")
        searchContainer[0].classList.add("scrolled")

    } else {
        navbar[0].classList.remove("scrolled")
        searchContainer[0].classList.remove("scrolled")
    }

}




document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-container input');
    const contentArea = document.querySelector('.Content .container');

    if (!searchInput || !contentArea) {
        console.error("No se encontró el buscador o el contenido. Revisa las clases.");
        return;
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();

        contentArea.innerHTML = contentArea.innerHTML.replace(/<mark>|<\/mark>/g, "");

        if (searchTerm.length < 2) return;

        const regex = new RegExp(`(${searchTerm})`, 'gi');
        contentArea.innerHTML = contentArea.innerHTML.replace(regex, '<mark>$1</mark>');

        const firstMatch = contentArea.querySelector('mark');
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

