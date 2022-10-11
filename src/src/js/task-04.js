let counterValue = 0;

let incrementListenerBtn = document.querySelector('[data-action="increment"]');
let decrementListenerBtn = document.querySelector('[data-action="decrement"]');
let span = document.querySelector("#value");

const handleClickInc = () => {
  counterValue++;
  span.textContent = counterValue;
  console.log("Button was clicked");
};
incrementListenerBtn.addEventListener("click", handleClickInc);

const handleClickDec = () => {
  counterValue--;
  span.textContent = counterValue;
  console.log("Button was clicked");
};

decrementListenerBtn.addEventListener("click", handleClickDec);
