const BACKEND_URL = "https://policy-chatbot-backend.onrender.com";

async function askQuestion() {
  const question = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");

  if (!question.trim()) {
    answerDiv.innerText = "Please enter a question.";
    return;
  }

  answerDiv.innerText = "Thinking...";

  try {
    const response = await fetch(`${BACKEND_URL}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await response.json();

    if (data.answer) {
      answerDiv.innerText = data.answer;
    } else if (data.error) {
      answerDiv.innerText = data.error;
    } else {
      answerDiv.innerText = "No answer returned.";
    }

  } catch (err) {
    console.error(err);
    answerDiv.innerText = "Error connecting to backend.";
  }
}
