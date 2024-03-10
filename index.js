let productsGrid = document.getElementById("products-grid");

// fetch json data
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log("Data loaded:", data);
    loadDogProducts(data.dogs.products);
    loadDogClinics(data.dogs.clinics);
    loadDogFood(data.dogs.food);
  })
  .catch(function (err) {
    console.error("Error fetching data:", err);
  });

// load dog products
function loadDogProducts(products) {
  console.log("Loading Dog Products:", products);
  createSection("Dog Products", generateProductHTML(products));
}

// load dog clinics
function loadDogClinics(clinics) {
  console.log("Loading Dog Clinics:", clinics);
  createSection("Dog Clinics", generateProductHTML(clinics));
}

// load dog food
function loadDogFood(food) {
  console.log("Loading Dog Food:", food);
  createSection("Dog Food", generateProductHTML(food));
}

// create a section with a title and content
function createSection(title, content) {
  let sectionHTML = `
    <div class="row mb-4">
      <div class="col">
        <h3>${title}</h3>
      </div>
    </div>
    <div class="row mb-4">
      ${content}
    </div>
  `;
  productsGrid.innerHTML += sectionHTML;
}

// generate HTML for products
function generateProductHTML(products) {
  console.log("Generating HTML for products:", products);
  let productHTML = '<div class="row">'; // Start a new row for each product category
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log("Processing product:", product);

    productHTML += `<div class="col-4"> <!-- Adjust the column size as needed -->
      <div class="card" style="height: 100%;">
        <div class="mb-1 p-3 d-flex justify-content-center align-items-center" style="height: 100%;">
          <img src="./${product.image}" class="img-fluid" style="height: 100%; object-fit: cover;" />
        </div>
        <div class="overflow-hidden px-3 mt-2" style="height: 50px;">
          ${product.name}
        </div>
        <div class="mb-2 px-3 fw-bold">$${product.priceInCents / 100}</div>
      </div>
    </div>`;
  }

  productHTML += '</div>'; // End the row
  console.log("Generated HTML:", productHTML);
  return productHTML;
}
