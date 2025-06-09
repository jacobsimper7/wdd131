// Footer infor for last modified date and time
let oLastModif = new Date(document.lastModified);
let currentyear = new Date().getFullYear();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
     dateStyle: "full"
    }
).format(oLastModif)}</span>`;