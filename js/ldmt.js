const contactForm = document.querySelector(".contact-form");
const fullName = document.querySelector(".full-name");
const emailAddress = document.querySelector(".email-address");
const phoneNumber = document.querySelector(".phone-number");
const address = document.querySelector(".address");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit-form");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal-close");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  db.collecton("contact-form")
    .doc()
    .set({
      fullName: fullName.value,
      email: emailAddress.value,
      phoneNumber: phoneNumber.value,
      address: address.value,
      message: message.value,
    })
    .then(() => {
      contactForm.reset();
      modal.classList.toggle("display-none");
    });
});
