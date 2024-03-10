let productsGrid = document.getElementById("products-grid");

// fetch json data
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    loadDogProducts(data.dogs.products);
    loadDogClinics(data.dogs.clinics);
    loadDogFood(data.dogs.food);
  })
  .catch(function (err) {
    console.error("Error fetching data:", err);
  });

// load dog products
function loadDogProducts(products) {
  createSection("Dog Products", generateProductHTML(products));
}

// load dog clinics
function loadDogClinics(clinics) {
  createSection("Dog Clinics", generateProductHTML(clinics));
}

// load dog food
function loadDogFood(food) {
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
  let productHTML = '';
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productHTML += `<div class="col d-flex flex-column">
      <div class="card">
        <div class="mb-1 p-3 d-flex justify-content-center align-items-center" style="height: 200px">
          <img src="./${product.image}" class="img-fluid" style="max-height: 100%" />
        </div>
        <div class="overflow-hidden px-3 mt-2" style="height: 50px">
          ${product.name}
        </div>
        <div class="mb-2 px-3 fw-bold">$${product.priceInCents / 100}</div>
      </div>
    </div>`;
  }
  return productHTML;
}
