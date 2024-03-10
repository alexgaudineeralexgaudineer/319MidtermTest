let productsGrid = document.getElementById("products-grid");

// fetch json data
fetch('./data.json')
  .then((response) => response.json())
  .then((products) => loadProducts(products))
  .catch(function (err) {
    console.log("ERROR" + err)
  });

// load products grid with all the data in the data.json file
function loadProducts(data) {
  let productHTML = ``;

  // Dog Products
  productHTML += generateProductHTML(data.dogs.products, "Dog Products");

  // Dog Clinics
  productHTML += generateProductHTML(data.dogs.clinics, "Dog Clinics");

  // Dog Food
  productHTML += generateProductHTML(data.dogs.food, "Dog Food");

  productsGrid.innerHTML = productHTML;
}

// Generate HTML for a category
function generateProductHTML(products, categoryName) {
  let categoryHTML = `
    <div class="row mb-4">
      <h2>${categoryName}</h2>
  `;

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    categoryHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <div class="mb-1 p-3 d-flex justify-content-center align-items-center" style="height: 200px">
            <img src="./${product.image}" class="img-fluid" style="max-height: 100%" />
          </div>
          <div class="overflow-hidden px-3 mt-2" style="height: 50px">
            ${product.name}
          </div>
          <div class="mb-2 px-3 fw-bold">$${product.priceInCents / 100}</div>
        </div>
      </div>
    `;
  }

  categoryHTML += `</div>`;
  return categoryHTML;
}
