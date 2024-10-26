// Function to sort pets by price in ascending order
const sortPetsByPrice = () => {
    const petDataContainer = document.getElementById("petImformation");
    const pets = Array.from(petDataContainer.children); // Get all pet cards

    // Sort pets based on price
    pets.sort((a, b) => {
        const priceA = parseFloat(a.querySelector("p:last-of-type").textContent.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.querySelector("p:last-of-type").textContent.replace(/[^0-9.-]+/g, ""));
        return priceA - priceB; // Ascending order
    });

    // Clear the container and re-append sorted pets
    petDataContainer.innerHTML = "";
    pets.forEach(pet => petDataContainer.appendChild(pet));
};
// Add this line after your existing button definitions in displayPetData
const sortButton = document.getElementById("sortByPriceButton");
sortButton.addEventListener("click", sortPetsByPrice);
