// Footer infor for last modified date and time
let oLastModif = new Date(document.lastModified);
let currentyear = new Date().getFullYear();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(oLastModif)}</span>`;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector('select[name="product"]');
    // Clear existing options except the first one
    select.innerHTML = '<option value="">Please Select &#9662;</option>';
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Get the current count or default to 0
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    // Increment the count
    reviewCount++;
    // Save it back to localStorage
    localStorage.setItem("reviewCount", reviewCount);
});
