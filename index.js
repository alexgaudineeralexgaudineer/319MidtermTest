let productsGrid = document.getElementById("products-grid");

// fetch json data
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => loadProducts(data.dogs))
  .catch(function (err) {
    console.log("ERROR" + err);
  });

// load products grid with all the data in the data.json file
function loadProducts(data) {
  let productHTML = '';

  productHTML += createSection(data.products, "Dog Products");
  productHTML += createSection(data.clinics, "Dog Clinics");
  productHTML += createSection(data.food, "Dog Food");

  productsGrid.innerHTML = productHTML;
}

// Generate HTML for a category
function createSection(products, categoryName) {
  let sectionHTML = `
    <div class="row mb-4">
      <div class="col">
        <h3>${categoryName}</h3>
      </div>
    </div>
    <div class="row mb-4">
      ${generateProductHTML(products)}
    </div>
  `;
  return sectionHTML;
}

// Generate HTML for products
function generateProductHTML(products) {
  let productHTML = '';
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    productHTML += `<div class="col-4 mb-3"> <!-- col-4 for 3 cards in a row -->
      <div class="card" style="height: 100%;">
        <div class="mb-1 p-3 d-flex justify-content-center align-items-center" style="height: 100%;">
          <img src="./${product.image}" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="overflow-hidden px-3 mt-2" style="height: 50px;">
          ${product.name}
        </div>
        <div class="mb-2 px-3 fw-bold">$${product.priceInCents / 100}</div>
      </div>
    </div>`;
  }

  return productHTML;
}
