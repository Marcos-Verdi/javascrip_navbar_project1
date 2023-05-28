const toggleButton = document.querySelector('.toggle-button');
const linksContainer = document.querySelector('.nav-links');

toggleButton.addEventListener('click', displayLinksToggle)

function displayLinksToggle() {
    linksContainer.classList.toggle('hide') 
}
