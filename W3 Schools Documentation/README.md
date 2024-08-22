# JavaScript Tutorial

JavaScript is the world's most popular programming language and is essential for web development. It is the programming language of the Web, enabling developers to create dynamic and interactive web applications. JavaScript is versatile, beginner-friendly, and supported by all modern web browsers. It is used for both client-side and server-side development, making it a full-stack language.

In this documentation, you will learn JavaScript with hands-on coding examples and concepts, helping you to build a strong foundation and advance your skills in web development.

# JavaScript Concepts

### Hoisting

[Hoisting](https://github.com/ImranParthibInsights/JavaScript_Programming/blob/main/W3%20Schools%20Documentation/JavaScript%20Hoisting/hoisting.js) is JavaScript's default behavior of moving declarations to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.

#### Key Points

1. **Variable Hoisting**:

   - Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
   - Variables declared with `let` and `const` are hoisted but not initialized. They remain in the Temporal Dead Zone (TDZ) until the declaration is encountered.

2. **Function Hoisting**:
   - Function declarations are hoisted to the top of their scope, so they can be called before they are defined.

#### Code Examples

##### Variable Hoisting with `var`

```javascript
console.log(myVar); // Output: undefined
var myVar = "Hello, World!";
console.log(myVar); // Output: Hello, World!
```

### JavaScript `this` Keyword

The `this` keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used:

- In a method, `this` refers to the owner object.
- Alone, `this` refers to the global object (in a browser, it refers to `window`).
- In a function, `this` refers to the global object (in strict mode, it is `undefined`).
- In an event, `this` refers to the element that received the event.

#### Examples

##### In a Method

In a method, `this` refers to the owner object.

```javascript
const aboutMe = {
  firstname: "Imran",
  lastName: "Parthib",
  fullName: function () {
    return `${this.firstname} ${this.lastName}`;
  },
};
console.log(aboutMe.fullName()); // Output: Imran Parthib
```
