import { getExsitingWhistlist } from './wishesFunction.js';

const wishes = getExsitingWhistlist();

const productsContainer = document.querySelector('.products-container');

if (wishes.lengt === 0) {
  productsContainer.innerHTML = 'Nothing';
}

wishes.forEach((wish) => {
  productsContainer.innerHTML += `<div class="product">
                                    <h4 class="product-title">${wish.name}</h4>
                                    <img src="${wish.image}" alt=""></img>
                                    <span class="price-span">Price: $${wish.price}</span>
                                    <i class="fas fa-heart"></i>
                                    </div>`;
});
