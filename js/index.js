import { renderFakeProducts } from './ui/renderProducts.js';
import { searchFakeProducts } from './ui/searchProducts.js';
import { getExsitingWhistlist } from './utils/wishesFunction.js';

const url = 'https://fakestoreapi.com/products';

async function getFakeProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderFakeProducts(products);
    searchFakeProducts(products);

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
}

getFakeProducts();
