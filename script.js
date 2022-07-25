// ------------LANDING PAGE
var options = {
  strings: [
    "^3000 hiking 🌿",
    "spending time with family ❤️",
    "watching horror movies 👻",
    "writing music 🎶",
    "playing video games 🎮",
    "singing 🎤",
  ],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
};

var typed = new Typed(".text-animation", options);

// ---------------CONTACT SUBMIT BUTTON

let formSubmit = document.getElementById("form-id");
// let contactInput = document.querySelector(".form-control");

const handleSubmit = (event) => {
  event.preventDefault();
  let name = document.getElementById("name-id");
  let email = document.getElementById("email-id");
  let message = document.getElementById("message-id");

  if (
    name.value.length > 0 &&
    email.value.length > 0 &&
    message.value.length > 0
  ) {
    let contactSubmissionForm = document.getElementById("contact-notification");
    contactSubmissionForm.classList.add("contact-notification-class-success");
    contactSubmissionForm.innerHTML =
      "Thank you for your submission! I'll be in contact with you shortly.";
    name.value = "";
    email.value = "";
    message.value = "";
  } else {
    return;
  }
};
// contactInput.addEventListener("keypress", contactInputValue);
formSubmit.addEventListener("submit", handleSubmit);
