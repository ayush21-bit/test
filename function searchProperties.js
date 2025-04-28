// Simulate fetching data (in a real-world scenario, you would get this data from a backend API)
const propertiesData = [
  {
    title: "",  // Start as empty, owner will fill
    location: "",  // Start as empty, owner will fill
    rent: "",  // Start as empty, owner will fill
    bhk: 2,  // Example: Default value
    ownerPhone: "",  // Start as empty, to be filled by the owner
    imageSrc: "https://via.placeholder.com/300",
    id: "property1"  // Example: Default value
  },
  {
    title: "",  // Start as empty, owner will fill
    location: "",  // Start as empty, owner will fill
    rent: "",  // Start as empty, owner will fill
    bhk: 1,  // Example: Default value
    ownerPhone: "",  // Start as empty, to be filled by the owner
    imageSrc: "https://via.placeholder.com/300",
    id: "property2"  // Example: Default value
  }
];

// Function to dynamically add property cards
function addPropertyCard(title, location, rent, bhk, ownerPhone, imageSrc, id) {
  const propertyContainer = document.querySelector('.properties');
  const propertyCard = document.createElement('div');
  propertyCard.classList.add('property-card');
  propertyCard.id = id;

  propertyCard.innerHTML = `
    <img src="${imageSrc}" alt="Property Image">
    <div class="property-info">
      <h3>Title: <input type="text" id="title-${id}" value="${title}" placeholder="Enter Property Title"></h3>
      <p>Location: <input type="text" id="location-${id}" value="${location}" placeholder="Enter Property Location"></p>
      <div class="bhk-selection">
        <label for="bhk">Number of BHK:</label>
        <select id="bhk-${id}">
          <option value="1" ${bhk === 1 ? 'selected' : ''}>1 BHK</option>
          <option value="2" ${bhk === 2 ? 'selected' : ''}>2 BHK</option>
          <option value="3" ${bhk === 3 ? 'selected' : ''}>3 BHK</option>
          <option value="4" ${bhk === 4 ? 'selected' : ''}>4 BHK</option>
        </select>
      </div>
      <div class="owner-phone">
        <label for="ownerPhone">Owner Phone Number:</label>
        <input type="text" id="ownerPhone-${id}" value="${ownerPhone}" placeholder="Enter Owner Phone Number">
      </div>
      <div class="rent">
        <label>Rent (per month):</label>
        <input type="number" id="rent-${id}" value="${rent}" placeholder="Enter Rent">
      </div>
      <button class="details-btn" onclick="viewDetails('${id}')">View Details</button>
      <button class="rented-btn" onclick="markAsRented('${propertyCard.id}')">Mark as Rented</button>
      <span class="badge">Available</span>
    </div>
  `;

  propertyContainer.appendChild(propertyCard);
}

// Function to mark a property as rented
function markAsRented(propertyId) {
  const propertyCard = document.getElementById(propertyId);
  const badge = propertyCard.querySelector('.badge');
  badge.innerText = 'Occupied';
  badge.style.backgroundColor = '#ff0000';
  alert("This property has been marked as rented.");
}

// Function to view details of the property
function viewDetails(propertyId) {
  const title = document.getElementById(`title-${propertyId}`).value;
  const location = document.getElementById(`location-${propertyId}`).value;
  const rent = document.getElementById(`rent-${propertyId}`).value;
  const bhk = document.getElementById(`bhk-${propertyId}`).value;
  const ownerPhone = document.getElementById(`ownerPhone-${propertyId}`).value;

  alert(`Property: ${title}\nLocation: ${location}\nRent: ₹${rent}/month\nBHK: ${bhk} BHK\nOwner Phone: ${ownerPhone}`);
}

// Add initial properties dynamically (now BHK and all other fields are editable)
propertiesData.forEach(property => {
  addPropertyCard(property.title, property.location, property.rent, property.bhk, property.ownerPhone, property.imageSrc, property.id);
});
