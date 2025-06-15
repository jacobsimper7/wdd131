// Footer info for last modified date and time
let oLastModif = new Date(document.lastModified);
let currentyear = new Date().getFullYear();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
     dateStyle: "full"
    }
).format(oLastModif)}</span>`;

const galleryItems = [
  {
    title: "3D Printed Fidget Sword",
    img: "images/fidget-sword.webp",
    alt: "Fidget Sword",
    link: "https://www.thingiverse.com/thing:6563222",
    category: "fidget"
  },
  {
    title: "Infinity Cube",
    img: "images/infinity-cube.webp",
    alt: "3D Printed Infinity Cube",
    link: "https://www.thingiverse.com/thing:4997903",
    category: "fidget"
  },
  {
    title: "3D Printed Quad Star Fidget Toy",
    img: "images/quad-star-fidget.webp",
    alt: "3D Printed Quad Star Fidget Toy",
    link: "https://www.thingiverse.com/thing:4804260",
    category: "fidget"
  },
  {
    title: "3D Printed Fidget Spinner",
    img: "images/fidget-spinner.webp",
    alt: "3D Printed Fidget Spinner",
    link: "https://www.thingiverse.com/thing:1794875",
    category: "fidget"
  },
  {
    title: "Articulated Snake",
    img: "images/articulated-snake.webp",
    alt: "3D Printed Articulated Snake",
    link: "https://www.thingiverse.com/thing:7058952",
    category: "fidget"
  },
  {
    title: "SLC Temple Napkin Holder",
    img: "images/temple-napkin-holder.webp",
    alt: "SLC Temple napkin holder",
    link: "https://www.thingiverse.com/thing:2014525",
    category: "temple"
  },
  {
    title: "Golden Plates Tissue Box",
    img: "images/golden-plates-tissue-box.webp",
    alt: "3D Printed Golden Plates Tissue Box",
    link: "https://www.thingiverse.com/thing:3234616",
    category: "temple"
  },
  {
    title: "Tie Clips for Church",
    img: "images/tie-clips.webp",
    alt: "Tie Clips for Church",
    link: "https://www.thingiverse.com/thing:5937224",
    category: "temple"
  },
  {
    title: "3D Printed Salt Lake Temple",
    img: "images/salt-lake-temple.webp",
    alt: "3D Printed Salt Lake Temple",
    link: "https://www.thingiverse.com/thing:729743",
    category: "temple"
  }
];

// Function to display gallery items
function displayGallery(items) {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <a href="${item.link}" target="_blank">
        <img src="${item.img}" alt="${item.alt}" loading="lazy">
        <div class="overlay"><p>${item.title}</p></div>
      </a>
    `;
    grid.appendChild(div);
  });
}

// Initial display
displayGallery(galleryItems);

// Filtering with buttons
document.querySelectorAll('.gallery-filters button').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.gallery-filters button').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    if (filter === 'all') {
      displayGallery(galleryItems);
    } else {
      displayGallery(galleryItems.filter(item => item.category === filter));
    }
  });
});