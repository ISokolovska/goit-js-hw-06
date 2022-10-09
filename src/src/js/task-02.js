const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

ingredients.map((ingredient, index, ingredients) => {
  const menuItemsByTagName = document.createElement("li");
  menuItemsByTagName.textContent = ingredient;
  listIngredients.prepend(menuItemsByTagName);
  menuItemsByTagName.classList.add("item");
});
