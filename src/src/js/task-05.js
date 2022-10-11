let textInput = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

textInput.oninput = function () {
  output.innerHTML = textInput.value;
};
