import Product from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProduct = new Product("", -5.99);
validate(newProduct).then((errors) => {
  if (errors.length > 0) {
    console.log(`VALIDATION ERRORS:`);
    console.log(errors);
  }
});
console.log(newProduct.getInformation());

// const p1 = new Product("Sonos Arc", 1089);

// const loadedProducts = products.map((item) => {
//   return new Product(item.title, item.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
