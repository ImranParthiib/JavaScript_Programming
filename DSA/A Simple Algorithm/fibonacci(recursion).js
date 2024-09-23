function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

let nTerms = 10;
let result = "";
if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    result += fibonacci(i) + " ";
  }
  console.log(result.trim());
}
