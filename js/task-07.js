const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputText.addEventListener("change", (event) => {
  spanText.style.fontSize = event.currentTarget.value + "px";
});
