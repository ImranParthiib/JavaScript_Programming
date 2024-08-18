// Define a JavaScript object named 'product' with nested objects and arrays
const product = {
  labptop: "Asus Tuff15",
  phone: "Iphone",
  items: {
    list1: ["Table", "Chair", "Fan"],
    list2: ["Cable23", "Mouse", "pad"],
  },
};

console.log(product);
// Convert the JavaScript object to a JSON string
const jsonString = JSON.stringify(product);
console.log(jsonString);
// Parse the JSON string back into a JavaScript object
const jsObject = JSON.parse(jsonString);

console.log(jsObject);
