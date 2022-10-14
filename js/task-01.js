const listСategories = document.querySelectorAll(".item");
console.log(`Number of categories: `, listСategories.length);

for (const category of listСategories) {
  console.log(`Category: `, category.firstElementChild.textContent);
  console.log(`Elements: `, category.lastElementChild.children.length);
}
