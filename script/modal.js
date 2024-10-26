// Function to open modal and fetch pet details
document.addEventListener("DOMContentLoaded", function () {
  // Function to close the modal
  const closeModal = () => {
    document.getElementById('petModal').classList.remove('active');
  };

  // Add event listener to the close button (only inside the DOMContentLoaded block)
  const closeModalButton = document.getElementById('closeModalButton');
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  // Function to open pet modal and fetch pet details
  const openPetModal = (petId) => {
    // Fetch pet details dynamically using the petId
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.petData) {
          const pet = data.petData; // Access the pet data
          
          // Populate modal with pet details
          const modalBody = document.getElementById('modalBody');
          modalBody.innerHTML = `
            <img src="${pet.image}" class="w-full h-64 object-cover rounded-lg mb-4" alt="${pet.pet_name}" />
            <h2 class="font-bold text-2xl mb-2">${pet.pet_name}</h2>
            <p><strong>Breed:</strong> ${pet.breed}</p>
            <p><strong>Category:</strong> ${pet.category}</p>
            <p><strong>Date of Birth:</strong> ${pet.date_of_birth}</p>
            <p><strong>Price:</strong> $${pet.price}</p>
            <p><strong>Gender:</strong> ${pet.gender}</p>
            <p><strong>Vaccinated Status:</strong> ${pet.vaccinated_status}</p>
            <p><strong>Details:</strong> ${pet.pet_details}</p>
          `;
          
          // Show modal by adding 'active' class
          document.getElementById('petModal').classList.add('active');
        } else {
          console.error('Error: Pet data not found.');
        }
      })
      .catch((error) => console.error('Error fetching pet details:', error));


  };

  // Add event listeners to all 'Details' buttons dynamically after loading pets
  document.addEventListener('click', function (event) {
    if (event.target && event.target.matches("#details-button")) {
      const petId = event.target.getAttribute('data-pet-id'); // Get only the pet ID
      openPetModal(petId); // Open the modal with the specific pet details
    }
  });

});





















  
