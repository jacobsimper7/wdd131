// Footer info for last modified date and time
let oLastModif = new Date(document.lastModified);
let currentyear = new Date().getFullYear();

lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
     dateStyle: "full"
    }
).format(oLastModif)}</span>`;

document.getElementById('exploreBtn').addEventListener('click', function() {
  window.location.href = 'gallery.html';
});

document.addEventListener("DOMContentLoaded", () => {
  // Material options array
  const materials = [
    { id: "pla", name: "PLA", costPerKg: 20.0 },
    { id: "abs", name: "ABS", costPerKg: 25.0 },
    { id: "petg", name: "PETG", costPerKg: 30.0 },
    { id: "resin", name: "Resin", costPerKg: 40.0 },
    { id: "other", name: "Other", costPerKg: null }
  ];

  // Populate the dropdown
  const materialSelect = document.getElementById("materialUsed");
  materialSelect.innerHTML = '<option value="">Select Material</option>';
  materials.forEach(material => {
    const option = document.createElement("option");
    option.value = material.id;
    option.textContent = material.name;
    materialSelect.appendChild(option);
  });

  // Show/hide custom material fields
  const otherFields = document.getElementById("otherMaterialFields");
  const customMaterialInput = document.getElementById("customMaterial");
  const otherCostInput = document.getElementById("otherCost");

  materialSelect.addEventListener("change", function() {
    if (this.value === "other") {
      otherFields.style.display = "block";
      customMaterialInput.required = true;
      otherCostInput.required = true;
    } else {
      otherFields.style.display = "none";
      customMaterialInput.required = false;
      otherCostInput.required = false;
      customMaterialInput.value = "";
      otherCostInput.value = "";
    }
  });

  // Example: Handle form submission
  const quoteForm = document.querySelector('.quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let selectedMaterial, costPerKg;
      if (materialSelect.value === "other") {
        selectedMaterial = customMaterialInput.value;
        costPerKg = otherCostInput.value;
      } else {
        const selected = materials.find(m => m.id === materialSelect.value);
        selectedMaterial = selected ? selected.name : "";
        costPerKg = selected ? selected.costPerKg : "";
      }
      // Use selectedMaterial and costPerKg as needed
      console.log("Material:", selectedMaterial, "Cost per kg:", costPerKg);

      document.getElementById('quote-message').style.display = 'block';
      quoteForm.reset();
      otherFields.style.display = "none";
    });
  }

  // Color options array
  const colors = [
    "Red", "Blue", "Green", "Black", "White", "Yellow", "Gray", "Other"
  ];

  // Populate the color dropdown
  const colorSelect = document.getElementById("color");
  colorSelect.innerHTML = '<option value="">Select Color</option>';
  colors.forEach(color => {
    const option = document.createElement("option");
    option.value = color.toLowerCase();
    option.textContent = color;
    colorSelect.appendChild(option);
  });

  // Show/hide custom color field
  const otherColorFields = document.getElementById("otherColorFields");
  const customColorInput = document.getElementById("customColor");

  colorSelect.addEventListener("change", function() {
    if (this.value === "other") {
      otherColorFields.style.display = "block";
      customColorInput.required = true;
    } else {
      otherColorFields.style.display = "none";
      customColorInput.required = false;
      customColorInput.value = "";
    }
  });
});