document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header-box");
    const typingText = document.getElementById("typing-text");
    const continueText = document.getElementById("continue-text");
    const overlay = document.querySelector(".overlay-text");
    const wipText = document.getElementById("wip-text");

    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);

    const text = "This is currently a WIP site in development that I work on when I am not doing other projects, please come back later. :)";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            continueText.style.opacity = 1;
            continueText.style.animation = "blink 1s infinite";
            overlay.addEventListener("click", onOverlayClick);
        }
    }

    function onOverlayClick() {
        overlay.style.opacity = 0;
        overlay.removeEventListener("click", onOverlayClick);
        setTimeout(() => {
            wipText.style.opacity = 1;
        }, 500);
    }

    setTimeout(() => {
        overlay.style.opacity = 1;
        typeWriter();
    }, 2500);
});