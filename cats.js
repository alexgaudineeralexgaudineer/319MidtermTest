let productsGrid = document.getElementById("products-grid");

// fetch json data
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log("Data loaded:", data);
    loadCatProducts(data.cats.products);
    loadCatClinics(data.cats.clinics);
    loadCatFood(data.cats.food);
  })
  .catch(function (err) {
    console.error("Error fetching data:", err);
  });

// load cat products
function loadCatProducts(products) {
  console.log("Loading Cat Products:", products);
  createSection("Cat Products", generateProductHTML(products));
}

// load cat clinics
function loadCatClinics(clinics) {
  console.log("Loading Cat Clinics:", clinics);
  createSection("Cat Clinics", generateProductHTML(clinics));
}

// load cat food
function loadCatFood(food) {
  console.log("Loading Cat Food:", food);
  createSection("Cat Food", generateProductHTML(food));
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
  let productHTML = '';
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log("Processing product:", product);

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

  console.log("Generated HTML:", productHTML);
  return productHTML;
}
