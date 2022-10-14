function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputAmount = document.querySelector('[type="number"]');
const btnCreateBoxes = document.querySelector("button[data-create]");
const btnDestroyBoxes = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let divSize = 30;

  for (let i = 0; i < inputAmount.value; i += 1) {
    let randomHexColor = getRandomHexColor();
    if (inputAmount.value) {
      divBoxes.insertAdjacentHTML(
        "beforeend",
        `<div style= "width: ${divSize}px; height: ${divSize}px; background-color: ${randomHexColor}"></div>`
      );
      divSize += 10;
    } else {
      alert("Please enter a number!");
    }
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

btnCreateBoxes.addEventListener("click", createBoxes);
btnDestroyBoxes.addEventListener("click", destroyBoxes);
