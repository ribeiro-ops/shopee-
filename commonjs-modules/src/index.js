import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!");

// criando itens
const item1 = await createItem("hotwheels ferrari", 20.99, 7);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// adicionando ao carrinho
await cartService.addItem(myCart, item1);

// adicionando na wishlist
await cartService.addItem(myWhishList, item2);

// mostrando carrinho
console.log("\n🛒 CART LIST:");
await cartService.displayCart(myCart);

// mostrando wishlist
console.log("\n💖 WISHLIST:");
await cartService.displayCart(myWhishList);

// total
console.log("\n💰 Shopee Cart TOTAL IS:");
await cartService.calcularTotal(myCart);
