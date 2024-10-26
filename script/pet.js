// console.log("pet js added?");



 
const loadPetCategories = ()=>{
    // console.log("loadPetCategories created");
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res)=> res.json())
    .then((data)=> displayCategories(data.categories))
    .catch((error)=>console.log(error));
};




//for load pet section
const loadPets = (categoryId)=>{
    // console.log("loadPetCategories created");
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res)=> res.json())
    .then((data)=>  displayPetData(data.pets))
    .catch((error)=>console.log(error));
};
const loadSpecificCategory =(petId)=>{
  const loadingSpinner = document.getElementById("loadingSpinner");
  loadingSpinner.classList.remove("hidden");

  
  setTimeout(() => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${petId}`)
        .then((res) => res.json())
        .then((data) => {
            displayPetData(data.data);
            // Hide the loading spinner after data is loaded
            loadingSpinner.classList.add("hidden");
        })
        .catch((error) => {
            console.log(error);
            // Hide the loading spinner in case of an error
            loadingSpinner.classList.add("hidden");
        });
}, 3000);
 }


//for display pet data
const displayPetData =(pets)=>{
// console.log( pets);
const petDataContainer = document.getElementById("petImformation");
petDataContainer.innerHTML ="";
if(pets.length==0){
  petDataContainer.classList.remove("grid");
  petDataContainer.innerHTML =`
  
  <div  class="min-h-screen w-full flex flex-col gap-5 justify-center items-center">
  <img src="images/error.webp"/>

<h2 class="font-bold text-3xl">No Imformation Available</h2>
<p id="sorry-text" class="font-bold ">"Sorry, we don't have the information for 'Bird' at the moment.<br>
Please check back later or try again soon!"</p>

  </div>
  
  
  `;
  return;
}else{
  petDataContainer.classList.add("grid");

}


pets.forEach((pet)=>{
console.log(pet);
const card = document.createElement("div");
card.classList="card card-compact";
card.innerHTML=`
<figure class="h-[300px]">
    <img
      src=${pet.image}
      class="h-full w-full object-cover rounded-lg"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
   <div>
   <img src=""/>
   </div>
   <div>
   <h2 class="font-bold text-3xl">${pet.pet_name}</h2>
   <p id="pet-text" class="font-bold " style="display: flex; align-items: center; "><img src="https://img.icons8.com/?size=100&id=103025&format=png&color=000000"style="width: 20px; height: 20px; margin-right: 8px;"/>Breed : ${pet.breed}</p>
   <p   id="pet-text"     class="font-bold "      style="display: flex; align-items: center; "><img src="https://img.icons8.com/?size=100&id=23&format=png&color=000000" style="width: 20px; height: 20px; margin-right: 8px;"/>  Birth: ${pet.date_of_birth}</p>
  <p   id="pet-text"     class="font-bold    "    style="display: inline-flex; align-items: center;align-items: center; ">
  <img src="https://img.icons8.com/?size=100&id=1665&format=png&color=000000" 
       alt="gender icon" 
       style="width: 20px; height: 20px; margin-right: 8px;" />
  Gender: ${pet.gender}
</p>

   <p  id="pet-text"     class="font-bold " style="display: flex; align-items: center;"><img src="https://img.icons8.com/?size=100&id=121&format=png&color=000000"style="width: 20px; height: 20px; margin-right: 8px;"/>Price:  ${pet.price}</p>
    

   </div>
  </div>

  <div class="flex gap-2">
  
      <button id="like-button" onclick="addToLiked('${pet.image}', '${pet.pet_name}')"><img src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000" style="width: 40px; height: 40px; margin-right: 8px;" /></button>

  
  <button id="adopt-button" onclick="openAdoptModal()">Adopt</button>
  
   
   <button id="details-button" data-pet-id="${pet.petId}" class="btn btn-sm">Details</button>

  </div>

`;
petDataContainer.append(card);
});


};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    // Create a button container div
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("flex", "items-center", "mb-4");

    // Set up the button content with proper layout, pass category instead of petId
    buttonContainer.innerHTML = `
      <button id="btn-${item.category}" onclick="loadSpecificCategory('${item.category}')" class="btn flex items-center justify-between  category-btn">
        <span class="flex items-center">
          <img src="${item.category_icon}" alt="${item.category} Icon" class="w-8 h-8 mr-2"/>
          ${item.category}
        </span>
      </button>
    `;

    // Append the button container to the category container
    categoryContainer.append(buttonContainer);
  });
};









loadPetCategories();
loadPets();


// Function to add liked pet thumbnails
const addToLiked = (image, petName) => {
  const likedPetsContainer = document.getElementById("likedPetsContainer");

  // Create a thumbnail for the liked pet
  const likedPet = document.createElement("div");
  likedPet.classList = "liked-pet-thumbnail";
  likedPet.innerHTML = `
  <img src="${image}" class="w-full h-full object-cover rounded-lg" alt="${petName}" />
`;


  // Append the liked pet to the likedPetsContainer
  likedPetsContainer.append(likedPet);
};


  


























