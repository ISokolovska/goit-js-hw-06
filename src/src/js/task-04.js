let counterValue = 0;

const incrementListenerBtn = document.querySelector(".increment-button");
const decrementListenerBtn = document.querySelector(".decrement-button");
let span = document.getElementById("value");
span.textContent = counterValue;

incrementListenerBtn.addEventListener("click", (updateDisplay) => {
  counterValue++;
  let span = document.getElementById("value");
  span.textContent = counterValue;
  console.log("Клик");
});

decrementListenerBtn.addEventListener("click", (updateDisplay) => {
  counterValue--;
  console.log("Клик");
});

function updateDisplay(value) {
  document.getElementById("value").innerHTML = counterValue;
}
