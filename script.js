const API_URL = "https://policy-chatbot-frontend.onrender.com/ask";

async function ask() {
  const input = document.getElementById("question");
  const chat = document.getElementById("chat");
  const question = input.value.trim();

  if (!question) return;

  chat.innerHTML += `<div class="user">You:</div><div>${question}</div>`;
  input.value = "";

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  chat.innerHTML += `<div class="bot"><b>Assistant:</b> ${data.answer}</div>`;
}
