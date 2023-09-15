// script.js
const categoryList = document.getElementById('categoryList');
const allCategoriesButton = document.getElementById('allCategories');
const recipeContainer = document.querySelector('.recipe-container');
const recipeModal = document.getElementById('recipeModal');

// Sample API data
const categories = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Soup',
  'Starter',
  'Vegan',
  'Vegetarian',
];

// Function to display recipes based on the selected category
function displayRecipes(category) {
  // Clear the recipe container
  recipeContainer.innerHTML = '';

  // You can make an API request here to fetch recipes based on the selected category
  // and then display them in the recipeContainer
  // Example: fetchRecipesByCategory(category);

  // For this example, let's display a placeholder message
  const message = document.createElement('p');
  message.textContent = `Recipes in category: ${category}`;
  recipeContainer.appendChild(message);
}

// Function to open the recipe modal with details
function openRecipeModal(recipeDetails) {
  // Populate the modal with recipe details
  // Example: recipeModal.innerHTML = generateRecipeDetailsHTML(recipeDetails);

  // For this example, let's display a simple message
  recipeModal.innerHTML = `<div class="modal-content">
                                <span class="close-button" onclick="closeModal()">&times;</span>
                                <h2>Recipe Details</h2>
                                <p>This is where you can display recipe details.</p>
                            </div>`;

  // Display the modal
  recipeModal.style.display = 'block';
}

// Function to close the recipe modal
function closeModal() {
  recipeModal.style.display = 'none';
}

// Event listener for clicking on a category button
categoryList.addEventListener('click', event => {
  if (event.target && event.target.tagName === 'BUTTON') {
    const category = event.target.textContent;

    // Highlight the clicked category button
    const buttons = categoryList.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    // Display recipes based on the selected category
    displayRecipes(category);
  }
});

// Event listener for clicking the "All categories" button
allCategoriesButton.addEventListener('click', () => {
  // Clear the active class from all category buttons
  const buttons = categoryList.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('active'));

  // Display all categories
  displayRecipes('All categories');
});

// Event listener for closing the modal
recipeModal.addEventListener('click', event => {
  if (event.target === recipeModal) {
    closeModal();
  }
});

// Example: You can fetch initial categories from the API and populate the sidebar
categories.forEach(category => {
  const button = document.createElement('button');
  button.textContent = category;
  categoryList.appendChild(button);
});
