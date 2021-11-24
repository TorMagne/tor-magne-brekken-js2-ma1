import { getExsitingWhistlist } from './utils/wishesFunctions.js';

const wishes = getExsitingWhistlist;

const url = 'https://fakestoreapi.com/products/category/jewelery';
const productsContainer = document.querySelector('.products-container');
productsContainer.innerHTML = ` <div class="bouncer-box">
                                <div class="bouncer">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                </div>
                                </div>`;

const fakeInfo = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    productsContainer.innerHTML = '';

    json.forEach((product) => {
      let cssClass = 'far';
      // // check to wish array
      // // does product id exist in the wish array
      // const doesObjectExsist = wishes.find(function (wish) {
      //   console.log(wish);
      //   return parseInt(wish.id) === product.id;
      // });

      // console.log(doesObjectExsist);

      // // if it's in the array change style of heart
      // if (doesObjectExsist) {
      //   cssClass = 'fas';
      // }

      productsContainer.innerHTML += `<div class="product">
                                      <h4 class="product-title">${product.title}</h4>
                                      <img src="${product.image}" alt="">
                                      <span class="price-span">Price: $${product.price}</span>
                                      <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.title}" data-price="${product.price}" data-image="${product.image}">`;
    });

    const wishListButtons = document.querySelectorAll('.product i');

    const handleClick = (e) => {
      e.target.classList.toggle('fas');
      e.target.classList.toggle('far');

      const id = e.target.dataset.id;
      const name = e.target.dataset.name;
      const price = e.target.dataset.price;
      const image = e.target.dataset.image;

      const currentWishes = getExsitingWhistlist();

      const productExsist = currentWishes.find((wish) => {
        return wish.id === id;
      });

      if (!productExsist) {
        const product = { id: id, name: name, price: price, image: image };
        currentWishes.push(product);
        saveWishes(currentWishes);
      } else {
        const newWishes = currentWishes.filter((wish) => wish.id !== id);
        saveWishes(newWishes);
      }
    };

    wishListButtons.forEach((button) => {
      button.addEventListener('click', handleClick);
    });

    const saveWishes = (wishes) => {
      localStorage.setItem('wishlist', JSON.stringify(wishes));
    };
  } catch (error) {
    console.log(error);
  }
};

fakeInfo();