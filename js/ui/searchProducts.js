import { renderFakeProducts } from './renderProducts.js';
export function searchFakeProducts(products) {
  const search = document.querySelector('.search');

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim();

    const filteredFakeProducts = products.filter(function (products) {
      if (products.price <= searchValue) {
        return true;
      }
    });

    renderFakeProducts(filteredFakeProducts);
  };
}
