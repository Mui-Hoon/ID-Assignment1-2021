$(document).ready(function () {
  // Contact Form Input Data
  const nameInput = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const success = document.querySelector("#success");
  const errorNodes = document.querySelectorAll(".error");

  // Contact Form Input Validation
  function validateForm() {
    clearMessages();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
      errorNodes[0].innerText = "Please Enter Your Name";
      /* nameInput.classList.add("error-border"); */
      errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
      errorNodes[1].innerText = "Please Enter A Valid Email Address";
      /* email.classList.add("error-border"); */
      errorFlag = true;
    }

    if (message.value.length < 1) {
      errorNodes[2].innerText = "Please Enter Your Message";
      /* message.classList.add("error-border"); */
      errorFlag = true;
    }

    if (!errorFlag) {
      success.innerText = "Message Sent Successfully, Thank You! :)";
    }
  }

  // Clears Error / Success Messages
  function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
      errorNodes[i].innerText = "";
    }

    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
  }

  // To Check Whether Email Is Valid
  function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  const form = document.querySelector("#signup");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
});
