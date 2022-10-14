function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

function handleClick() {
  let randomHexColor = getRandomHexColor();
  spanText.textContent = randomHexColor;
  document.body.style.backgroundColor = randomHexColor;
}

changeColor.addEventListener("click", handleClick);
