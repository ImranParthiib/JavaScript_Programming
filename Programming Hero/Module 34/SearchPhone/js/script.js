const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.innerHTML = ""; // Clear previous content
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = `card card-compact bg-gray-100 shadow-xl p-2`;
    phoneDiv.innerHTML = `
      <figure>
        <img src="${phone.image}" alt="${phone.phone_name}" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.brand}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
};

// search button
const searchPhone = () => {
  console.log("searching...");
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
};

loadPhone();
