let previousUserInput = '';
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  //i realy dont care about this api key
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

const textButton = document.getElementById("text-button");
const inputField = document.getElementById("input");
const chatLog = document.getElementById("chat-log");

textButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const userInput = inputField.value;
  inputField.value = "";
  chatLog.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

  const prompt = previousUserInput + ' ' + userInput;
  const response = await openai.createCompletion({
    best_of: 20,
    //top_p: 10,
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 400,
    temperature: 0.5
  });
  const botResponse = response.data.choices[0].text;
  chatLog.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;
  previousUserInput = prompt;
});



