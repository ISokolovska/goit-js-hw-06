const categories = [
  {
    title: "Animals",
    items: ["Cat", "Hamster", "Horse", "Parrot"],
  },
  {
    title: "Products",
    items: ["Bread", "Prasley", "Cheese"],
  },
  {
    title: "Technologies",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
];

const keys = Object.keys(categories);
console.log(`Number of categories: ${keys.length}`);

for (const category of categories) {
  console.log(`Category: ${category.title}`);
  console.log(`Elements: ${category.items.length}`);
}
