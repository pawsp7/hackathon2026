const abortBtn = document.getElementById("abort");
abortBtn.addEventListener("click", () => 
    {
    document.body.classList.toggle("stopAnimation");
    abortBtn.innerHTML = document.body.classList.contains("stopAnimation")
        ? "MAKE IT COOL AGAIN"
        : "ABORT";
});

//WORKING ^^^^^

let day = "Monday"
 
const countdownElement = document.getElementById("countdown");
countdownElement.classList.add("growCountdown");


// ^^^ WORKING
let timeLeft = 5000; // 5 seconds in ms

const toggleVisibility = () => {
    const targets = document.querySelectorAll(
        "p, h1, h2, h3, img, .home, .contact, button, .footer, .header, .form"
    );

    targets.forEach(el => {
        el.classList.remove("hide");
    });
};

const updateCountdown = () => {
    const seconds = (timeLeft / 1000).toFixed(2);
    countdownElement.textContent = seconds;

    // Shake during final second
    if (timeLeft <= 1) {
        countdownElement.classList.add("countdown-final");
    }

    // When countdown ends
    if (timeLeft <= 0) {
        clearInterval(timer);

        // Start all animations and fade-in everything
        toggleVisibility();
        document.body.classList.toggle("stopAnimation");
        // document.body.id.toggle("noShow");

        countdownElement.classList.add("fadeOut");
        setTimeout(() => {
            countdownElement.style.display = "none";
        }, 500);

        return;
    }

    timeLeft -= 10; // update every 10ms
};

updateCountdown();
countdownElement.classList.add("growCountdown")
const timer = setInterval(updateCountdown, 10);