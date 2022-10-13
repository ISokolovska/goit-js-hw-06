function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputAmount = document.querySelector('[type="number"]');
const btnCreateBoxes = document.querySelector('button[data-action="create"]');
const btnDestroyBoxes = document.querySelector('button[data-action="destroy"]');
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const createDiv = divBoxes.createElement("div");
  divBoxes.appendChild(createDiv);
  createDiv.style.width = "30px";
  createDiv.style.height = "30px";
  const createDivList = [];
  let randomHexColor = getRandomHexColor();

  for (i = 0; i < amount; i += 1) {
    if (inputAmount.value) {
      divBoxes.insertAdjacentHTML("afterend", `<div></div>`);
      createDiv.style.backgroundColor = randomHexColor;
      createDiv.style.width += "10px";
      createDiv.style.height += "10px";
      createDivList.push(createDiv);
    } else {
      alert("Please enter a number!");
    }
  }
  divBoxes.insertAdjacentHTML("afterbegin", createDivList);
}

function destroyBoxes() {
  createDiv.remove();
}

btnCreateBoxes.addEventListener("click", createBoxes);
btnDestroyBoxes.addEventListener("click", destroyBoxes);
