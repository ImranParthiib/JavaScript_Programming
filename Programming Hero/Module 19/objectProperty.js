// Date: 2024-06-28 Friday
// JavaScript Object Property Access

const shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mosue: 1,
  pen: 25,
};
console.log(shoppingCart);
// Accessing Object Properties using Variable
let penCount = shoppingCart.pen;
console.log(penCount);
// Accessing Object Properties using Dot Notation
console.log(shoppingCart.pen);
// Accessing Object Properties using Array Notation
console.log(shoppingCart["pen"]);

// Accessing Object Properties using Object.keys()
let properties = Object.keys(shoppingCart);
// Accessing Object Values using Object.values()
let propertiesValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertiesValues);

// Loop through an Object
for (const property in shoppingCart) {
  console.log(property);
}
// Loop through an Object and Accessing Object Properties
for (const property in shoppingCart) {
  console.log(property, shoppingCart[property]);
}
// Loop through an Object and Accessing Object Values
for (const property in shoppingCart) {
  console.log(shoppingCart[property]);
}
