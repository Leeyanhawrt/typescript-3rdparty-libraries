import Product from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

// const p1 = new Product("Sonos Arc", 1089);

// const loadedProducts = products.map((item) => {
//   return new Product(item.title, item.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}
