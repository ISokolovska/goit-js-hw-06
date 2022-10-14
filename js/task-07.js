const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const handleInputRange = () => {
  spanText.style.fontSize = `${inputText.value}px`;
};

inputText.addEventListener("input", handleInputRange);
