async function askChatGPT() {
  const question = document.getElementById("question").value;
  const responseDiv = document.getElementById("response");

  responseDiv.innerHTML = "Thinking...";

  const apiKey = "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"; // Don't expose this in real apps!

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
      max_tokens: 100
    })
  });

  const data = await response.json();
  responseDiv.innerHTML = data.choices[0].message.content;
}
