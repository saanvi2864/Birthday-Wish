// Countdown Timer
function countdown() {
    const reunionDate = new Date("Dec 31, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = reunionDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
        days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";

    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "We're Reunited!";
    }
}

setInterval(countdown, 1000);
