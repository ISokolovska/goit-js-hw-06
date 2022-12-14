const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  event.currentTarget.reset();
  console.log(formData);
}
