// Change the color and text of all <h1> elements
const allHeaders = document.getElementsByTagName("h1");
for (const header of allHeaders) {
  header.style.color = "red";
  header.textContent = "Let's Learn DOM";
}

// Arrays of friends and colors
const friends = ["John", "Jane", "Mike", "Emily"];
const colors = ["red", "green", "blue", "yellow"];

// Change the background color, padding, and text of all <li> elements
const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = colors[i];
  listItems[i].style.padding = "10px";
  listItems[i].style.margin = "5px";
  listItems[i].textContent = friends[i];
}

// Change the background color, padding, and text of all <li> elements for mobile devices
if (window.innerWidth <= 768) {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = colors[i];
    listItems[i].style.width = "70px";
    listItems[i].textContent = friends[i];
    listItems[i].style.borderRadius = "10px";
  }
}
