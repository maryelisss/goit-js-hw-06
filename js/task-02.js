const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map(ingredient => {
const ingredientEl = document.createElement("li");
ingredientEl.classList = "item";
ingredientEl.textContent = ingredient;
return ingredientEl;  
})

ingredientsList.append(...ingredientsArray);





