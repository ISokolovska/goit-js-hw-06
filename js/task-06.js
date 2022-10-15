const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else if (textInput.value.length === 0) {
    textInput.classList.remove("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
  }
});

console.log(textInput.dataset.length);
