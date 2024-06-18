// Countdown Timer to July 1st, 2023
function startCountdown() {
    const clockdiv = document.getElementById("countdown");
    const countDownDate = new Date("July 1, 2023 00:00:00 UTC").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = countDownDate - now;

        if (diff <= 0) {
            clearInterval(countdownfunction);
            clockdiv.querySelector(".days").innerHTML = '0';
            clockdiv.querySelector(".hours").innerHTML = '0';
            clockdiv.querySelector(".minutes").innerHTML = '0';
            clockdiv.querySelector(".seconds").innerHTML = '0';
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            clockdiv.querySelector(".days").innerHTML = days;
            clockdiv.querySelector(".hours").innerHTML = hours;
            clockdiv.querySelector(".minutes").innerHTML = minutes;
            clockdiv.querySelector(".seconds").innerHTML = seconds;
        }
    }

    // Call updateCountdown immediately to set initial values
    updateCountdown();

    // Update countdown every second
    const countdownfunction = setInterval(updateCountdown, 1000);
}

// Start the countdown when the page is fully loaded
document.addEventListener('DOMContentLoaded', startCountdown);
