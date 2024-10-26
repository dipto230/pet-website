const openAdoptModal = () => {
    // Create the modal content for the Congratulations popup
    const adoptModal = document.createElement('div');
    adoptModal.classList.add('adopt-modal', 'fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-gray-800', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50');
    
    adoptModal.innerHTML = `
      <div class="bg-white p-6 rounded-lg w-3/4 sm:w-1/2 lg:w-1/3 text-center">
       <img src="https://img.icons8.com/?size=100&id=yHeF9urVx2aM&format=png&color=000000" alt="Congratulations" class="w-32 h-32 mx-auto mb-4" />
        <h2 class="text-3xl font-bold mb-4">Congratulations!</h2>
        <p class="text-xl mb-4 font-bold">Adoption Process Is start for your Pets</p>
        <p id="countdownText" class="text-lg font-semibold">3</p>
      </div>
    `;
  
    // Append the modal to the body
    document.body.appendChild(adoptModal);
  
    // Start the countdown
    let countdown = 3;
    const countdownText = document.getElementById('countdownText');
    const countdownInterval = setInterval(() => {
      countdown--;
      countdownText.textContent = countdown;
  
      if (countdown === 0) {
        clearInterval(countdownInterval);
        // Hide the modal after 3 seconds
        adoptModal.classList.add('hidden');
      }
    }, 1000);
  };
  