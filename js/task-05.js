let textInput = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

textInput.oninput = function (event) {
  output.textContent = event.currentTarget.value;
  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
};

textInput.addEventListener("input", textInput.oninput);
