![photo10 jpg](https://github.com/user-attachments/assets/2bca6fc5-ec82-474b-9fef-bf83f3dcdc1b)
![photo9 jpg](https://github.com/user-attachments/assets/8b91caef-7b2b-469c-b51f-8443857ca27a)
![photo8 jpg](https://github.com/user-attachments/assets/5dece477-ae54-4aa7-8e83-dcc6d07eefe3)
![photo7 jpg](https://github.com/user-attachments/assets/3f4dcba3-5a5e-4d09-bc34-8d9d982ca301)
![photo6 jpg](https://github.com/user-attachments/assets/3f63deb9-daab-46de-b85a-fe75a5dae888)
![photo5 jpg](https://github.com/user-attachments/assets/f01b953f-f474-44e3-b832-1ec2e6eeda85)
![photo4 jpg](https://github.com/user-attachments/assets/ab5e0abc-120c-445e-9286-ccea28957f47)
![photo3 jpg](https://github.com/user-attachments/assets/8b5e8f45-8908-4373-b70c-d0f63c33aa09)
![photo2 jpg](https://github.com/user-attachments/assets/8541a1c6-24b5-45d2-a4cb-c4fa27c5811a)
![photo1 jpg](https://github.com/user-attachments/assets/d82aba8e-d852-48cb-af98-f58bda965a24)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday Mehek!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <h1>Happy Birthday, Mehek! 🎉💖</h1>
        <p>Sending you love from afar, hoping this birthday brings you endless joy! 🌟</p>
    </header>

    <!-- Main Birthday Message -->
    <section class="message">
        <p>Life just isn’t the same without you here. But knowing you're out there following your dreams makes me so proud! I hope this birthday brings you endless joy, beautiful moments, and all the success your heart desires. You deserve every bit of happiness in the world, and I know amazing things are waiting for you, bhen. Please come to India soon because I can’t wait to see you again! Until then, keep shining bright, stay blessed, and may this year be the best one yet! 🎂🎉💫</p>
    </section>

    <!-- Photo Gallery Section -->
    <section class="gallery">
        <h2>Our Memories Together 📸</h2>
        <div class="photos">
            <div class="photo"><img src="photo1.jpg" alt="Memory 1"><p>Our First Adventure!</p></div>
            <div class="photo"><img src="photo2.jpg" alt="Memory 2"><p>Graduation Day</p></div>
            <div class="photo"><img src="photo3.jpg" alt="Memory 3"><p>Fun Times Together</p></div>
        </div>
    </section>

    <!-- Countdown Timer to Next Reunion -->
    <section class="countdown">
        <h2>Countdown to Our Next Reunion 💖</h2>
        <p id="countdown-timer"></p>
    </section>

    <!-- Footer Section -->
    <footer>
        <p>With love, [Your Name]</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background-color: #f7f0f5;
    color: #333;
    padding: 20px;
}

.header {
    text-align: center;
    padding: 30px;
    background-color: #ffb6c1;
    border-radius: 10px;
}

.header h1 {
    font-size: 3em;
    color: #ff69b4;
}

.header p {
    font-size: 1.5em;
}

.message {
    text-align: center;
    margin: 30px 0;
    font-size: 1.2em;
}

.gallery {
    margin: 40px 0;
    text-align: center;
}

.gallery h2 {
    font-size: 2em;
    color: #ff1493;
}

.photos {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.photo {
    max-width: 200px;
    margin: 10px;
}

.photo img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.photo p {
    margin-top: 5px;
    font-size: 1em;
}

.countdown {
    text-align: center;
    margin-top: 40px;
}

.countdown h2 {
    font-size: 2em;
    color: #ff1493;
}

footer {
    text-align: center;
    margin-top: 50px;
    font-size: 1.2em;
    color: #555;
}
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
