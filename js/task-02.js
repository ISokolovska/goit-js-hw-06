const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient, index, ingredients) => {
  const menuItemsByTagName = document.createElement("li");
  menuItemsByTagName.textContent = ingredient;
  menuItemsByTagName.classList.add("item");
  return menuItemsByTagName;
});

listIngredients.append(...markup);
