import { faker } from "@faker-js/faker";

function createRandomProduct() {
  return {
    product: faker.commerce.product(),
    productAdjective: faker.commerce.productAdjective(),
    productDescription: faker.commerce.productDescription(),
    productMaterial: faker.commerce.productMaterial(),
    productName: faker.commerce.productName(),
    id: faker.string.uuid(),
  };
}

const products = faker.helpers.multiple(createRandomProduct, {
  count: 5,
});

console.log(products);


const productListElement = document.querySelector('#products-list');
const productListItems = products.map(product => `<li>${product.productName}</li>`);
productListElement.innerHTML = productListItems.join('');