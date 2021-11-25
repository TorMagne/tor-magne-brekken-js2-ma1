// import { getExsitingWhistlist } from './utils/wishesFunctions.js';

// const wishes = getExsitingWhistlist();

export const renderProduct = (productToRender) => {
  const productsContainer = document.querySelector('.products-container');
  productArray.forEach((product) => {
    let cssClass = 'far';
    // check to wish array
    // does product id exist in the wish array
    const doesObjectExsist = wishes.find(function (wish) {
      return parseInt(wish.id) === product.id;
    });

    // if it's in the array change style of heart
    if (doesObjectExsist) {
      cssClass = 'fas';
    }
    productsContainer.innerHTML = '';

    productsContainer.innerHTML += `<div class="product">
                                      <h4 class="product-title">${product.title}</h4>
                                      <img src="${product.image}" alt="">
                                      <span class="price-span">Price: $${product.price}</span>
                                      <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.title}" data-price="${product.price}" data-image="${product.image}">`;
  });
};
