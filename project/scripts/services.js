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
        name: "Fidget Sword",
        averagerating: 4.5
    },
    {
        name: "Infinity Cube",
        averagerating: 4.7
    },
    {
        name: "Quad Star Fidget Toy",
        averagerating: 3.5
    },
    {
        name: "Fidget Spinner",
        averagerating: 3.9
    },
    {
        name: "Articulated Snake",
        averagerating: 5.0
    },
    {
        name: "SLC Temple Napkin Holder",
        averagerating: 4.8
    },
    {
        name: "Golden Plates Tissue Box",
        averagerating: 4.2
    },
    {
        name: "Tie Clips",
        averagerating: 4.5
    },
    {
        name: "3d Printed Salt Lake Temple",
        averagerating: 4.7
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