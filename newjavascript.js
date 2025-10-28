// House data (Replace with actual images and descriptions)
const houses = [
    {
        name: "Zerina Premium",
        type: "Single Attached",
        location: "Lipa, Batangas",
        price: 2500000,
        images: ["properties/house1.jpg", "properties/house1b.jpg", "properties/house1c.jpg", "properties/house1d.jpg", "properties/house1e.jpg", "properties/house1f.jpg", "properties/house1g.jpg"],
        shortDescription: "2 Beds | 1 Toilet & Bath | Carport Provision | Lot Area 80sqm | Floor Area 50.2sqm",
        fullDescription: "Lynville Estate in Lipa City offers an affordable yet high-quality house and lot, perfect for individuals and families looking for a comfortable home in one of the coldest places in the Philippines."
    },
    {
        name: "Fuji",
        type: "Single Detached",
        location: "Dasmariñas, Cavite",
        price: 9200000,
        images: ["properties/house2.jpg", "properties/house2b.jpg", "properties/house2c.jpg", "properties/house2d.jpg", "properties/house2e.jpg", "properties/house2f.jpg", "properties/house2g.jpg", "properties/house2h.jpg", "properties/house2i.jpg"],
        shortDescription: "3 Beds | 2 Toilet & Baths | Dining & Kitchen Area | Carport Area | Service Area | Balcony | Lot Area 120sqm | Floor Area 82.98sqm",
        fullDescription: "Idesia Fuji is a modern home perfect for families looking for comfort, security, and accessibility to essential establishments."
    },
    {
        name: "Yuri",
        type: "Single Attached",
        location: "Dasmariñas, Cavite",
        price: 7400000,
        images: ["properties/house3.jpg", "properties/house3b.jpg", "properties/house3c.jpg", "properties/house3d.jpg", "properties/house3e.jpg", "properties/house3f.jpg", "properties/house3g.jpg", "properties/house3h.jpg", "properties/house3i.jpg"],
        shortDescription: "2 Beds | 2 Toilet & Baths | Kitchen Area | Carport Area | Terrace | Lot Area 96sqm | Floor Area 63.30sqm",
        fullDescription: "Idesia Yuri is a home perfect for small families or individuals looking for a peaceful and well-designed living space within a thriving community."
    },
        {
        name: "Aria",
        type: "Townhouse",
        location: "Dasmariñas, Cavite",
        price: 3300000,
        images: ["properties/house4.jpg", "properties/house4b.jpg", "properties/house4c.jpg", "properties/house4d.jpg", "properties/house4e.jpg", "properties/house4f.jpg", "properties/house4g.jpg", "properties/house4h.jpg", "properties/house4i.jpg"],
        shortDescription: "2 Beds | 1 Toilet & Baths | Living Room | Kitchen & Dining | Service Area | Carport | Lot Area 60sqm Reg Unit | Floor Area 42sqm",
        fullDescription: " Idesia Aria is ideal for small families or first-time home buyers looking for a cozy and affordable home in a strategic location."
    },
    {
        name: "Gaia",
        type: "Single Detached",
        location: "Dasmariñas, Cavite",
        price: 6400000,
        images: ["properties/house5.jpg", "properties/house5b.jpg", "properties/house5c.jpg", "properties/house5d.jpg", "properties/house5e.jpg", "properties/house5f.jpg", "properties/house5g.jpg", "properties/house5h.jpg", "properties/house5i.jpg", "properties/house5j.jpg", "properties/house5k.jpg", "properties/house5l.jpg"],
        shortDescription: "3 Beds | 2 Toilet & Baths |  Living Area | Kitchen & Dining | Service Area | Lanai | Carport | Balcony | Lot Area 100sqm | Floor Area 63sqm",
        fullDescription: "Idesia Gaia is a premium home for those who value space, with a lanai and balcony for added comfort and relaxation."
    },
    {
        name: "Talia",
        type: "Single Attached",
        location: "Dasmariñas, Cavite",
        price: 5400000,
        images: ["properties/house6.jpg", "properties/house6b.jpg", "properties/house6c.jpg", "properties/house6d.jpg", "properties/house6e.jpg", "properties/house6f.jpg", "properties/house6g.jpg", "properties/house6h.jpg", "properties/house6i.jpg", "properties/house6j.jpg", "properties/house6k.jpg", "properties/house6l.jpg"],
        shortDescription: "2 Beds | 1 Toilet & Baths | Living Room | Kitchen & Dining | Service Area | Lanai | Carport | Balcony | Lot Area 80sqm | Floor Area 52.25sqm",
        fullDescription: "Idesia Talia is a modern and stylish home with open spaces and a lanai, perfect for growing families."
    },
        {
        name: "Hasu",
        type: "Single Attached",
        location: "Dasmariñas, Cavite",
        price: 8000000,
        images: ["properties/house7.jpg", "properties/house7b.jpg", "properties/house7c.jpg", "properties/house7d.jpg", "properties/house7e.jpg", "properties/house7f.jpg", "properties/house7g.jpg", "properties/house7h.jpg", "properties/house7i.jpg", "properties/house7j.jpg", "properties/house7k.jpg"],
        shortDescription: "3 Beds | 1 Toilet & Baths | Living Room | Kitchen & Dining | Service Area | Lanai | Carport | Balcony | Lot Area 96sqm | Floor Area 77sqm",
        fullDescription: "Idesia Hasu a premium home for those who value space, with a lanai and balcony for added comfort and relaxation."
    },
        {
        name: "Acacia",
        type: "Duplex",
        location: "Lipa, Batangas",
        price: 1800000,
        images: ["properties/house8.jpg", "properties/house8b.jpg", "properties/house8c.jpg", "properties/house8d.jpg"],
        shortDescription: "3 Beds | 3 Layer Wall Tiles | 2 Way Faucet | Telephone | Shower | Lot Area 70sqm | Floor Area 50.2sqm",
        fullDescription: "Lynville Acacia is a practical and budget-friendly duplex home, ideal for small families or first-time home buyers looking for affordability and comfort."
    },
        {
        name: "Sora",
        type: "Single Attached",
        location: "Cabuyao, Laguna",
        price: 3900000,
        images: ["properties/house9.jpg", "properties/house9b.jpg", "properties/house9c.jpg", "properties/house9d.jpg", "properties/house9e.jpg", "properties/house9f.jpg", "properties/house9g.jpg"],
        shortDescription: "2 Beds | 1 Toilet & Baths | Living Room | Kitchen & Dining | Service Area | Lanai | Carport | Balcony | Lot Area 80sqm | Floor Area 52.25sqm",
        fullDescription: "Idesia Sora is a modern and efficient home layout, perfect for growing families who want a balance of space, functionality, and affordability."
    },
        {
        name: "Yama",
        type: "Townhouse",
        location: "Cabuyao, Laguna",
        price: 2600000,
        images: ["properties/house10.jpg", "properties/house10b.jpg", "properties/house10c.jpg", "properties/house10d.jpg", "properties/house10e.jpg", "properties/house10f.jpg", "properties/house10g.jpg", "properties/house10h.jpg"],
        shortDescription: "2 Beds | 1 Toilet & Baths | Living Room | Kitchen & Dining | Service Area | Carport | Lot Area 50sqm | Floor Area 42sqm",
        fullDescription: "Idesia Yama is designed for comfortable family living with generous spaces and modern aesthetics, ideal for homeowners who value privacy and style."
    },
        {
        name: "Mori",
        type: "Single Detached",
        location: "Cabuyao, Laguna",
        price: 5700000,
        images: ["properties/house11.jpg", "properties/house11b.jpg", "properties/house11c.jpg", "properties/house11d.jpg", "properties/house11e.jpg", "properties/house11f.jpg", "properties/house11g.jpg", "properties/house11h.jpg"],
        shortDescription: "3 Beds | 2 Toilet & Baths | Living Room | Kitchen & Dining | Service Area | Carport | Balcony | Lot Area 100sqm | Floor Area 62.70sqm",
        fullDescription: "Idesia Mori is a stylish and affordable townhouse option in Idesia East, providing a comfortable living space for starting families or young professionals."
    },
        {
        name: "Amara",
        type: "Single Attached",
        location: "Biñan, Laguna",
        price: 3200000,
        images: ["properties/house12.jpg", "properties/house12b.jpg", "properties/house12c.jpg", "properties/house12d.jpg", "properties/house12e.jpg", "properties/house12f.jpg", "properties/house12g.jpg", "properties/house12h.jpg", "properties/house12i.jpg", "properties/house12j.jpg", "properties/house12k.jpg", "properties/house12l.jpg"],
        shortDescription: "2 Beds | 1 Toilet & Baths | Living Room | Kitchen & Dining | Carport | Lot Area 45sqm | Floor Area 48sqm",
        fullDescription: "The Granary Amara is a premium single attached home that offers a spacious and modern living experience. Designed with elegance and functionality in mind, it provides the perfect comfort for growing families."
    }

];

let currentHouseIndex = 0;
let currentImageIndex = 0;

const modal = document.getElementById("houseModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");

// Function to show house details in the modal
function showHouseDetails() {
    const house = houses[currentHouseIndex];
    modalTitle.innerText = house.name;
    modalDetails.innerText = house.fullDescription; 
    modalImage.src = house.images[currentImageIndex];
}

// Function to open the modal
function openModal(index) {
    currentHouseIndex = index;
    currentImageIndex = 0;
    showHouseDetails();
    modal.style.display = "flex";
}

// Function to close the modal
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Function to attach event listeners to "View" buttons
function attachViewButtonListeners() {
    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            openModal(index);
        });
    });
}

// Function to display all houses (called on page load)
function displayHouses() {
    const listingsContainer = document.querySelector(".listings-container");
    listingsContainer.innerHTML = ""; // Clear container before displaying

    houses.forEach((house, index) => {
        listingsContainer.innerHTML += `
            <div class="house-card">
                <div class="house-image">
                    <img src="${house.images[0]}" alt="${house.name}">
                </div>
                <div class="house-details">
                    <h3>${house.name}</h3>
                    <h3>₱${house.price.toLocaleString()}</h3>
                    <p>${house.type} - ${house.location}</p>
                    <p>${house.shortDescription}</p>
                    <button class="view-btn" data-index="${index}">View</button>
                </div>
            </div>
        `;
    });

    attachViewButtonListeners(); // Ensures "View" buttons work on page load
}

// Function to filter house listings based on dropdown selections
function filterHouses() {
    console.log("Filter function triggered");

    const selectedType = document.getElementById("property-type").value;
    const selectedLocation = document.getElementById("location").value;
    const selectedPriceRange = document.getElementById("price-range").value;

    const priceRanges = {
        "1M-3M": [1000000, 3000000],
        "3M-6M": [3000000, 6000000],
        "6M-9M": [6000000, 9000000],
        "9M-12M": [9000000, 12000000],
        "12M-15M": [12000000, 15000000]
    };

    const listingsContainer = document.querySelector(".listings-container");
    listingsContainer.innerHTML = ""; // Clear current listings

    let found = false;

    houses.forEach((house, index) => {
        let matchesType = selectedType === "" || house.type.toLowerCase() === selectedType.toLowerCase();
        let matchesLocation = selectedLocation === "" || house.location.toLowerCase() === selectedLocation.toLowerCase();
        let matchesPrice = true;

        if (selectedPriceRange && priceRanges[selectedPriceRange]) {
            const [minPrice, maxPrice] = priceRanges[selectedPriceRange];
            matchesPrice = house.price >= minPrice && house.price <= maxPrice;
        }

        if (matchesType && matchesLocation && matchesPrice) {
            found = true;
            listingsContainer.innerHTML += `
                <div class="house-card">
                    <div class="house-image">
                        <img src="${house.images[0]}" alt="${house.name}">
                    </div>
                    <div class="house-details">
                        <h3>${house.name}</h3>
                        <h3>₱${house.price.toLocaleString()}</h3>
                        <p>${house.type} - ${house.location}</p>
                        <p>${house.shortDescription}</p>  
                        <button class="view-btn" data-index="${index}">View</button>
                    </div>
                </div>
            `;
        }
    });

    if (!found) {
        listingsContainer.innerHTML = `<p style="text-align: center; font-size: 18px; color: red;">No properties found.</p>`;
    }

    console.log("Updated listings container:", listingsContainer.innerHTML);

    // Reattach event listeners after filtering
    setTimeout(() => {
        attachViewButtonListeners();
    }, 0);
}

// Event listener for search form submission
document.querySelector(".search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    filterHouses();
});

// Function to change image when clicking arrows
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = houses[currentHouseIndex].images.length - 1;
    } else if (currentImageIndex >= houses[currentHouseIndex].images.length) {
        currentImageIndex = 0;
    }
    modalImage.src = houses[currentHouseIndex].images[currentImageIndex];
}

// Call displayHouses() on page load
window.addEventListener("DOMContentLoaded", () => {
    displayHouses();
});
