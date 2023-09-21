// script.js
const categoryList = document.getElementById('categoryList');
const allCategoriesButton = document.getElementById('allCategories');
const recipeContainer = document.querySelector('.recipe-container');
const recipeModal = document.getElementById('recipeModal');

// Sample API data
const categories = [
  { _id: '6462a6cd4c3d0ddd28897f8e', name: 'Beef' },
  { _id: '6462a6cd4c3d0ddd28897f95', name: 'Breakfast' },
  { _id: '6462a6cd4c3d0ddd28897f8d', name: 'Chicken' },
  { _id: '6462a6cd4c3d0ddd28897f8f', name: 'Dessert' },
  { _id: '6462a6cd4c3d0ddd28897f97', name: 'Goat' },
  { _id: '6462a6cd4c3d0ddd28897f8b', name: 'Lamb' },
  { _id: '6462a6cd4c3d0ddd28897f93', name: 'Miscellaneous' },
  { _id: '6462a6cd4c3d0ddd28897f94', name: 'Pasta' },
  { _id: '6462a6cd4c3d0ddd28897f91', name: 'Pork' },
  { _id: '6462a6cd4c3d0ddd28897f8a', name: 'Seafood' },
  { _id: '6462a6cd4c3d0ddd28897f96', name: 'Side' },
  { _id: '6462a6cd4c3d0ddd28897f98', name: 'Soup' },
  { _id: '6462a6cd4c3d0ddd28897f8c', name: 'Starter' },
  { _id: '6462a6cd4c3d0ddd28897f90', name: 'Vegan' },
  { _id: '6462a6cd4c3d0ddd28897f92', name: 'Vegetarian' },
];

categories.forEach(category => {
  const button = document.createElement('button');
  button.textContent = category.name;
  categoryList.appendChild(button);
});

function displayRecipes(category) {
  recipeContainer.innerHTML = '';

  const message = document.createElement('p');
  message.textContent = `Recipes in category: ${category}`;
  recipeContainer.appendChild(message);
  console.log(`Pressed ${category}`);
}

// // Function to open the recipe modal with details
// function openRecipeModal(recipeDetails) {
//   // Populate the modal with recipe details
//   // Example: recipeModal.innerHTML = generateRecipeDetailsHTML(recipeDetails);

//   // For this example, let's display a simple message
//   recipeModal.innerHTML = `<div class="modal-content">
//                                 <span class="close-button" onclick="closeModal()">&times;</span>
//                                 <h2>Recipe Details</h2>
//                                 <p>This is where you can display recipe details.</p>
//                             </div>`;

//   // Display the modal
//   recipeModal.style.display = 'block';
// }

// Function to close the recipe modal
// function closeModal() {
//   recipeModal.style.display = 'none';
// }

// Event listener for clicking on a category button
categoryList.addEventListener('click', event => {
  if (event.target && event.target.tagName === 'BUTTON') {
    const category = event.target.textContent;

    const buttons = categoryList.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    displayRecipes(category);
  }
});

allCategoriesButton.addEventListener('click', () => {
  const buttons = categoryList.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('active'));

  displayRecipes('All categories');
});

// // Event listener for closing the modal
// recipeModal.addEventListener('click', event => {
//   if (event.target === recipeModal) {
//     closeModal();
//   }
// });
