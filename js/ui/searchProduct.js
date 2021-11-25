export function renderProductsNumber() {
  const search = document.querySelector('.search');
  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim();

    const filteredProducts = productArray.filter(function (product) {
      if (product.price >= searchValue) {
        return true;
      }
      console.log(filteredProducts);
    });
  };
}

renderProductsNumber();
