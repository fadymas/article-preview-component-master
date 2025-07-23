// 1. Select necessary DOM elements
const shareButtons = document.querySelectorAll("button");
const shareIcon = document.querySelector("button .fa-share.text-Desaturated-dark-blue");
const mainSection = document.querySelector(".main__info");
const sellerDiv = document.querySelector(".main__seller");
const shareDiv = document.querySelector(".main__share");

// 2. Toggle share UI on button click
shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Toggle share box visibility
        shareDiv.classList.toggle("opacity-0");
        shareDiv.classList.toggle("opacity-100");

        // Toggle the after-pseudo element's opacity for styling effect (only on extra-large screens)
        mainSection.classList.toggle("xl:after:opacity-0");
        mainSection.classList.toggle("xl:after:opacity-100");

        if (window.innerWidth > 1280) {
            // Change icon color for active/inactive state
            shareIcon.classList.toggle("text-Desaturated-dark-blue");
            shareIcon.classList.toggle("text-Light-grayish-blue");

            // Change background of the button container for visual feedback
            const shareButtonContainer = shareIcon.parentElement;
            shareButtonContainer.classList.toggle("bg-Light-grayish-blue");
            shareButtonContainer.classList.toggle("bg-Desaturated-dark-blue");
        }
    });
});
