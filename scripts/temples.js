let oLastModif = new Date(document.lastModified);
let currentyear = new Date().getFullYear();

// Display the last modified date
lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
     dateStyle: "full"
    }
).format(oLastModif)}</span>`;

// Update the year in the footer
document.querySelector("#currentyear").textContent = currentyear;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	hambutton.classList.toggle('show');
    mainnav.classList.toggle('show');
});