const counterValue = 0;

const addListenerBtn = document.querySelector('[data-action="decrement"]');
const removeListenerBtn = document.querySelector('[data-action="increment"]');
const btn = document.querySelector("#btn");

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  btn.addEventListener("click", handleClick);
  console.log("click event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  btn.removeEventListener("click", handleClick);
  console.log("click event listener was removed from btn");
});
