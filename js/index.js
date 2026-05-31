

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
    const searchZones = document.querySelectorAll('.Content .container, .contenedor-temas');

    if (!searchInput || searchZones.length === 0) {
        console.error("No se encontró el buscador o las zonas de contenido.");
        return;
    }
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();

        searchZones.forEach(zone => {
            zone.innerHTML = zone.innerHTML.replace(/<mark class="resaltado">|<\/mark>/g, "");
        });
        if (searchTerm.length < 2) return;
        const regex = new RegExp(`(?<!<[^>]*?)(${searchTerm})`, 'gi');
        searchZones.forEach(zone => {
            zone.innerHTML = zone.innerHTML.replace(regex, '<mark class="resaltado">$1</mark>');
        });
        const firstMatch = document.querySelector('mark.resaltado');
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

