let currentSearchText = "iphone"; // Default search text

const loadPhone = async (searchText = "iphone", showAll = false) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, showAll);
};

const displayPhone = (phones, showAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = ""; // Clear previous content

  // Display show all button or hide it
  const showAllBtn = document.getElementById("show-all-btn");
  if (phones.length > 12 && !showAll) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }

  if (!showAll) {
    phones = phones.slice(0, 12); // Limit to the first 12 results
  }

  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = `card card-compact bg-gray-100 shadow-xl p-2`;
    phoneDiv.innerHTML = `
      <figure>
        <img src="${phone.image}" alt="${phone.phone_name}" />
      </figure>
      <div class="card-body">
        <h2 class="text-slate-950 card-title">${phone.phone_name}</h2>
        <p class="text-slate-800">${phone.brand}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
};

// Search button
const searchPhone = () => {
  console.log("searching...");
  const searchField = document.getElementById("search-field");
  currentSearchText = searchField.value; // Update current search text
  console.log(currentSearchText);
  loadPhone(currentSearchText);
  searchField.value = ""; // Clear search field
};

// Load default phones on page load
loadPhone();

// Show all button functionality
const showAll = () => {
  loadPhone(currentSearchText, true); // Use the current search text
};

document.getElementById("show-all-btn").addEventListener("click", showAll);

console.log("phones");
