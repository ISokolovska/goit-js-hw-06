const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputText.addEventListener("input", (event) => {
  spanText.style.fontSize = `${inputText.value}px`;
});
