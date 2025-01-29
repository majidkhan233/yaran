const funnyMessages = [
    "Why don't skeletons fight each other? They don't have the guts! 💀",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "What do you call fake spaghetti? An impasta! 🍝",
    "Why don’t eggs tell jokes? They’d crack each other up! 🥚",
    "What do you call cheese that isn’t yours? Nacho cheese! 🧀",
    "Why did the math book look sad? Because it had too many problems! 📚",
    "What do you get when you cross a snowman and a vampire? Frostbite! ☃️🧛",
    "Why don’t scientists trust atoms? Because they make up everything! ⚛️",
    "What do you call a bear with no teeth? A gummy bear! 🐻",
    "Why did the bicycle fall over? Because it was two-tired! 🚲"
];

function showFunnyMessage() {
    const randomIndex = Math.floor(Math.random() * funnyMessages.length);
    const messageElement = document.getElementById('funny-message');
    messageElement.textContent = funnyMessages[randomIndex];
}