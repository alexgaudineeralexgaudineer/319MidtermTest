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
    console.log("ERROR" + err);
  });

// load dog products
function loadDogProducts(products) {
  let productHTML = generateProductHTML(products);
  productsGrid.innerHTML += `<div class="row mb-4"><h3>Dog Products</h3></div>`;
  productsGrid.innerHTML += productHTML;
}

// load dog clinics
function loadDogClinics(clinics) {
  let clinicHTML = generateProductHTML(clinics);
  productsGrid.innerHTML += `<div class="row mb-4"><h3>Dog Clinics</h3></div>`;
  productsGrid.innerHTML += clinicHTML;
}

// load dog food
function loadDogFood(food) {
  let foodHTML = generateProductHTML(food);
  productsGrid.innerHTML += `<div class="row mb-4"><h3>Dog Food</h3></div>`;
  productsGrid.innerHTML += foodHTML;
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
