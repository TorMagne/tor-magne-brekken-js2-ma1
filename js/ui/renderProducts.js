import { getExsitingWhistlist } from '../utils/wishesFunction.js';
const wishes = getExsitingWhistlist();

export const renderFakeProducts = (products) => {
  const productsContainer = document.querySelector('.products-container');
  productsContainer.innerHTML = '';

  products.forEach((products) => {
    let cssClass = 'far';
    // check to wish array
    // does product id exist in the wish array
    const doesObjectExsist = wishes.find(function (wish) {
      return parseInt(wish.id) === products.id;
    });

    // if it's in the array change style of heart
    if (doesObjectExsist) {
      cssClass = 'fas';
    }

    productsContainer.innerHTML += `<div class="product">
                                    <h4 class="product-title">${products.title}</h4>
                                    <img src="${products.image}" alt="">
                                    <span class="price-span">Price: $${products.price}</span>
                                     <i class="${cssClass} fa-heart" data-id="${products.id}" data-name="${products.title}" data-price="${products.price}" data-image="${products.image}">`;
  });
};

// ${cssClass}
