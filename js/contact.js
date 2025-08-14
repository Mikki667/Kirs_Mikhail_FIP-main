console.log("JavaScript File is linked");

// variables
const logoImage = document.querySelector(".logo-img");
const socialIcons = document.querySelectorAll(".social-icon");
const contactForm = document.querySelector(".contact-box");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// functions

function handleLogoClick() {
console.log("Logo was clicked");
}

function handleSocialClick(event) {
    console.log("Social media clicked:", event.target.alt);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userMessage = messageInput.value;

    console.log("Form submitted with:", userName, userEmail, userMessage);

    contactForm.reset();
}

// event listeners

logoImage.addEventListener("click", handleLogoClick);

socialIcons.forEach(icon => {
    icon.addEventListener("click", handleSocialClick);
});

contactForm.addEventListener("submit", handleFormSubmit);