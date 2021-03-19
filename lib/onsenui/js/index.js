// This is a JavaScript file

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});
var signinButton = document.getElementById("send") // 버튼을 만들고.
signinButton.addEventListener('click', bu) // 'click'이란 id의 버튼을 누르면 signinFunc 함수를 실행.
function bu() {
  const inputField = document.getElementById("input");
  let input = inputField.value;
  inputField.value = "";
  output(input);
}
function output(input) {
  let product;

  let text = input;
  text = text.trim()
    .replace("!", "")
    .replace("?", "")
    .replace("^^", "")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    product = compare(prompts, replies, text);
    sendMessage1(text+" "+ip);
  } else if (text.match("코로나")) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    sendMessage1(text+" "+ip);
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
    sendMessage(text+" "+ip);
  }

  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}

function sendMessage(text) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/822121176351375370/NiIOIuI0AN2iQxw71ZA_QMlKQ2z2R0rjuesmq3wXsUnr7f-a_bnFcIxZuQ1l8AiR6Pef");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "AMADEUS",
    avatar_url: "https://www.kindpng.com/picc/m/452-4528188_amadeus-logo-steins-gate-hd-png-download.png",
    content: text
  }

  request.send(JSON.stringify(params));
}

function sendMessage1(text) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/822269249154056265/Qi7WC3-mFs27jBCdcfZrNqvAkKYs85IiGf6t7SNXQIXZzB8uM3xG0cRm3EhrKP2A8pIJ");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "AMADEUS",
    avatar_url: "https://www.kindpng.com/picc/m/452-4528188_amadeus-logo-steins-gate-hd-png-download.png",
    content: text
  }

  request.send(JSON.stringify(params));
}