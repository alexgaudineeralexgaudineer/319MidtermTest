let productsGrid = document.getElementById("products-grid");

// fetch json data
fetch('./data.json')
  .then((response) => response.json())
  .then((products) => loadProducts(products))
  .catch(function (err) {
    console.log("ERROR" + err)
  });

//load products grid with all the data in the data.json file
function loadProducts(data) {
  let productHTML = ``;
  for (let i = 0; i < data.cats.length; i++) {
    let product = data.cats[i];

    // add items to the displayed HTML
    productHTML = productHTML + `<div class="col d-flex flex-column">
          <div class="card">
            <div
              class="mb-1 p-3 d-flex justify-content-center align-items-center"
              style="height: 200px">
              <img
                src="./${product.image}"
                class="img-fluid"
                style="max-height: 100%" />
            </div>
            <div class="overflow-hidden px-3 mt-2" style="height: 50px">
              ${product.name}
            </div>
            <div class="mb-2 px-3 fw-bold">$${product.priceInCents/100}</div>
          </div>
        </div>`;
  }
  productsGrid.innerHTML = productHTML;
}