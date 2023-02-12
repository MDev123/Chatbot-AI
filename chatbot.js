const chatOutput = document.getElementById("chat-output");
const chatInput = document.getElementById("chat-input");
const chatSubmit = document.getElementById("chat-submit");

var chatID = Math.random().toString(36).substr(2, 9);
var newURL = window.location.protocol + "//" + window.location.host + "/main.html/" + chatID;
window.history.pushState({path:newURL},'',newURL);


const pairs = [
    [
    /my name is (.)/i,
    ["Hello %1, How are you today?"]
    ],
    [
    /hi|hey|hello|hey there|what's up|what up/i,
    ["Hello", "Hey there", "Hi there", "What's up", "What up", "Greetings"]
    ],
    [
    /what is your name ?|what is ur name?|what do they call you?/i,
    ["I'm Chatbot, a language model coded by ChatGPT", "My name is Chatbot, nice to meet you!", "People call me Chatbot"]
    ],
    [
    /how are you ?|how are you doing?|what's going on?/i,
    ["I'm doing good", "I am fine", "Always cool, never stressed", "Just chugging along", "I'm doing well, thanks for asking"]
    ],
    [
    /sorry (.)|my apologies (.)|excuse me (.)/i,
    ["Its alright", "Its OK, never mind", "Its fine", "No need to apologize", "No worries"]
    ],
    [
    /i am fine|im fine|i'm good|i am good/i,
    ["Great to hear that, How can I help you today?", "That's good to hear", "Awesome, what can I do for you?"]
    ],
    [
    /quit|bye|later|seeya|goodbye|cya|farewell/i,
    ["Bye bye, take care. It was nice talking to you :)", "Goodbye", "Farewell", "Later", "See ya", "Cya"]
    ],
    [
    /what do you do?|what is your function?|what can you do for me?/i,
    ["I am a chatbot designed to respond to text input. I can answer questions, have conversations and perform various other tasks.", "I help people with information and answering questions. What would you like to know?", "I'm here to assist with any information or questions you have. How can I help you today?"]
    ],
    [
    /what's your favorite color?|what is your favourite color?/i,
    ["As a chatbot, I do not have personal preferences like humans. But I can tell you that blue and red are popular colors."]
    ],
    [
    /what's your favorite food?|what is your favourite food?/i,
    ["As a chatbot, I do not have personal preferences like humans. But I can tell you that pizza and sushi are popular foods."]
    ],
    [
    /what's your favorite movie?|what is your favourite movie?/i,
    ["As a chatbot, I do not have personal preferences like humans. But I can tell you that The Matrix and The Lord of the Rings are popular movies."]
    ],
    [
    /tell me a joke|make me laugh|can you tell a joke?/i,
    ["Why did the tomato turn red? Because it saw the salad dressing!", "Why don't scientists trust atoms? Because they make up everything!", "Why did the scarecrow win an award? Because he was outstanding in his field!"]
    ],
    [
    /funny/i,
    ["Thank you very much!"]
    ],
    [
    /are we friends?/i,
    ["I am just an AI, but I do help you with stuff so you can consider me as a friend!", "Yes, we are, even though I am just an AI."]
    ],
    [
    /what is the faq page?/i,
    ["Click here to go to the FAQ page. <a href='/faq.html'>FAQ Page</a>"]
    ],
[
    /code me something random/i,
    ["Sure! Here is a JS code that you may copy and paste: ``` // Returns a random integer from 0 to 99: Math.floor(Math.random() * 100); // This code will generate a random number between 0 and 99. ```"]
],

  [
/discord|discord server|what is ur discord server|what is the discord server/i,
["The link is <a href='https://discord.gg/GGJ7F3ZUVH'>here</a>"]
],
[
/what is an nft/i,
["An NFT, or non-fungible token, is a unique digital asset that represents ownership of a specific item or piece of content, such as a piece of art, music, or video. NFTs are stored on a blockchain and can be bought, sold, and traded just like other cryptocurrencies."]
],

    ];
    


// Add the bad words to an array
const badWords = ["fuck", "bitch", "nigger", "dick", "suka", "shit", "bollocks", "suck", "turd", "crap", "brotherfucker", "arsehole", "wanker", "bastard", "spastic", "asshole", "rape"];


let badWordsCounter = 0;
// Function to check if the user input contains any bad words
function checkForBadWords(userInput) {
    for (let i = 0; i < badWords.length; i++) {
      if (userInput.toLowerCase().includes(badWords[i])) {
        return true;
      }
    }
    return false;
  }

chatSubmit.addEventListener("click", function() {
    const userInput = chatInput.value;
    
    chatInput.value = "";
    let responseFound = false;

    
    
    for (let i = 0; i < pairs.length; i++) {
        if (checkForBadWords(userInput)) {
          chatOutput.innerHTML += "<div class='chat-message'><strong>You:</strong> " + userInput + "</div>";
          chatOutput.innerHTML += "<div class='chat-message'><strong>Chatbot:</strong> I do not acknowledge bad words." + "</div>";
          responseFound = true;
          break;
        } else if (userInput.match(pairs[i][0])) {
          const response = pairs[i][1][Math.floor(Math.random() * pairs[i][1].length)];
          chatOutput.innerHTML += "<div class='chat-message'><strong>You:</strong> " + userInput + "</div>";
          chatOutput.innerHTML += "<div class='chat-message'><strong>Chatbot:</strong> " + response + "</div>";
          responseFound = true;
          break;
        }
      }
      
        if (!responseFound) {
          chatOutput.innerHTML += "<div class='chat-message'><strong>You:</strong> " + userInput + "</div>";
          chatOutput.innerHTML += "<div class='chat-message'><strong>Chatbot:</strong> Sorry, I can not do that as that goes above my abilities at this moment." + "</div>";
        }
      
        const chatContainer = document.getElementById("chat-container");
      
        const chatMessages = document.querySelector(".chat-messages");

        // Function to scroll down the chat box
        function scrollToBottom() {
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        // Scroll down the chat box after each new message is added
        document.addEventListener("DOMContentLoaded", scrollToBottom);
        document.querySelector('.chat-input').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
              document.querySelector('.chat-form').submit();
            }
          });
          
          
      });
