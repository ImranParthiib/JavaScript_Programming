const itmes = [
    { name: 'samsung s5', price: 45000, quantity: 1 },
    { name: 'asus laptop', price: 80000, quantity: 1 },
    { name: 'apple smart watch', price: 25000, quantity: 1 },
    { name: 'bosundhara binding paper', price: 100, quantity: 5 },
    { name: 'lg smart phone', price: 15000, quantity: 1 },
]
 
let totalPrice = 0;
for (const item of itmes) {
    totalPrice = totalPrice + item.price;
}
console.log(totalPrice);
