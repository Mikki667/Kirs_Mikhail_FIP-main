console.log("JavaScript File is linked");

// variables
const logoImage = document.querySelector(".logo-img");
const socialIcons = document.querySelectorAll(".social-icon");

// functions

function handleLogoClick() {
console.log("Logo was clicked");
}

function handleSocialClick(event) {
    console.log("Social media clicked:", event.target.alt);
}

// event listeners

logoImage.addEventListener("click", handleLogoClick);

socialIcons.forEach(icon => {
    icon.addEventListener("click", handleSocialClick);
});