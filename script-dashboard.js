// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------
     1️⃣ Chatbot Functionality
  ------------------------------------*/

  const chatbot = document.getElementById("chatbot");
  const chatToggle = document.getElementById("chat-toggle");
  const chatClose = document.getElementById("chat-close");
  const chatSend = document.getElementById("chat-send");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  // Toggle chatbot visibility
  chatToggle.addEventListener("click", () => {
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
  });

  // Close chatbot
  chatClose.addEventListener("click", () => {
    chatbot.style.display = "none";
  });

  // Send message
  chatSend.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message === "") return;

    appendMessage(message, "user");
    chatInput.value = "";

    setTimeout(() => {
      appendMessage(getBotResponse(message), "bot");
    }, 600);
  }

  function appendMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("chat-message", sender);
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes("stress")) {
      return "Try deep breathing for 2 minutes. It can reduce stress instantly 🌿";
    } else if (lowerMsg.includes("sleep")) {
      return "Good sleep hygiene helps mental balance. Aim for 7-8 hours 😴";
    } else if (lowerMsg.includes("help")) {
      return "You're not alone 💙. I'm here to listen. Try journaling your thoughts today.";
    } else if (lowerMsg.includes("focus")) {
      return "Take short breaks every 45 mins — your brain will thank you 🧠";
    } else {
      return "That’s interesting! Tell me more about how you’re feeling 💬";
    }
  }

  /* -----------------------------------
     2️⃣ Motivational Quote Rotator
  ------------------------------------*/

  const quotes = [
    "“Your mind is a garden. Your thoughts are the seeds.”",
    "“Every day may not be good, but there’s something good in every day.”",
    "“Self-care is how you take your power back.”",
    "“Balance is not something you find, it’s something you create.”",
    "“You can’t pour from an empty cup — take care of yourself first.”",
    "“Peace begins with a deep breath.”",
    "“Do something today that your future self will thank you for.”",
    "“Your mental health is a priority, not a luxury.”",
    "“Small progress is still progress.”",
    "“You are doing better than you think.”"
  ];

  const quoteText = document.getElementById("quote-text");
  let currentQuote = 0;

  function changeQuote() {
    if (!quoteText) return; // Prevents error if element missing
    quoteText.style.opacity = 0;
    setTimeout(() => {
      currentQuote = (currentQuote + 1) % quotes.length;
      quoteText.textContent = quotes[currentQuote];
      quoteText.style.opacity = 1;
    }, 600);
  }

  // Change quote every 5 seconds
  setInterval(changeQuote, 5000);

  /* -----------------------------------
     3️⃣ Smooth Page Fade-In Transition
  ------------------------------------*/

  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);

});
