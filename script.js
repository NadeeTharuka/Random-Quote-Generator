const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
];

const quoteElement = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");
const shareBtn = document.getElementById("shareBtn");

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;

    // Update share button link with the current quote
    const tweetText = encodeURIComponent(randomQuote);
    shareBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}

generateBtn.addEventListener("click", generateRandomQuote);

// Generate a random quote when the page loads
generateRandomQuote();
