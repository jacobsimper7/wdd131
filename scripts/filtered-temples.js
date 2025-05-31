// Original
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

// Filtered
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253023,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 70000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
  },
  {
    templeName: "Spokane Washington",
    location: "Spokane, Washington, United States",
    dedicated: "1999, August, 22",
    area: 10000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/spokane-washington-temple/spokane-washington-temple-19442.jpg"
  }
];

// Select the container where you want to display the temple cards
const templesContainer = document.querySelector("#temples"); // Make sure you have a <div id="temples"></div> in your HTML

// Helper function to clear the container
function clearTemples() {
  templesContainer.innerHTML = "";
}

// Function to display a given array of temples
function displayTemples(templeArray) {
  clearTemples();
  templeArray.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    templesContainer.appendChild(card);
  });
}

// Initial display of all temples
displayTemples(temples);

// Add event listeners to navigation menu items
document.querySelectorAll(".navigation a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const filter = this.textContent.trim().toLowerCase();

    let filteredTemples = temples;

    if (filter === "old") {
      filteredTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
      });
    } else if (filter === "new") {
      filteredTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
      });
    } else if (filter === "large") {
      filteredTemples = temples.filter(t => t.area > 90000);
    } else if (filter === "small") {
      filteredTemples = temples.filter(t => t.area < 10000);
    } else if (filter === "home") {
      filteredTemples = temples;
    }

    displayTemples(filteredTemples);
  });
});
