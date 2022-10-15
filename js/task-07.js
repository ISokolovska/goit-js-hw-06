const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const handleInputRange = (event) => {
  spanText.style.fontSize = `${event.value}px`;
};

inputText.addEventListener("input", handleInputRange);
