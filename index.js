let productsGrid = document.getElementById("products-grid");

// fetch json data
fetch('./data.json')
  .then((response) => response.json())
  .then((products) => loadProducts(products))
  .catch(function (err) {
    console.log("ERROR" + err);
  });

// load products grid with all the data in the data.json file
function loadProducts(data) {
  let productHTML = ``;

  productHTML += createSection(data.dogs.products, "Dog Products");
  productHTML += createSection(data.dogs.clinics, "Dog Clinics");
  productHTML += createSection(data.dogs.food, "Dog Food");

  productsGrid.innerHTML = productHTML;
}

// Generate HTML for a category
function createSection(products, categoryName) {
  let sectionHTML = `
    <div class="row mb-4">
      <h2>${categoryName}</h2>
  `;

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    sectionHTML += `
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

  sectionHTML += `</div>`;
  return sectionHTML;
}
