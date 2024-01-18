import { faker } from "@faker-js/faker";

function createRandomCartItems() {
  return {
    product: faker.commerce.product(),
    productName: faker.commerce.productName(),
    id: faker.string.uuid(),
    price: faker.commerce.price(),
    quantity: Math.ceil(Math.random() * 10),
    getPrice: function(){
      return this.quantity * this.price
    }
  };
}

const cartItems = faker.helpers.multiple(createRandomCartItems, {
  count: 5,
});

console.log(cartItems);


const cartListElement = document.querySelector('#cart-list');
const cartListItems = cartItems.map(item => `<li>Total Price for the product: <b>${item.productName}</b> is $${item.getPrice()} </li>`);
cartListElement.innerHTML = cartListItems.join('');