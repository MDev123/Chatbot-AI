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
/what is an nft|nft/i,
["An NFT, or non-fungible token, is a unique digital asset that represents ownership of a specific item or piece of content, such as a piece of art, music, or video. NFTs are stored on a blockchain and can be bought, sold, and traded just like other cryptocurrencies."]
],
  [
  /what is roblox\?|roblox/i,
  ["Roblox is a massively multiplayer online game platform that allows users to create their own games or play games created by other users. It's especially popular with younger audiences and is considered to be one of the most successful gaming companies in the world."]
],
 [
  /who is yt_nooob|yt_nooob/i,
  ["YT_nooob is a well-known YouTuber who specializes in creating content related to the online game Roblox. His channel, which has been active for several years, has amassed a large following of dedicated fans who enjoy his in-depth tutorials and guides on how to create and optimize games within the platforOne of the hallmarks of YT_nooob's content is his ability to take complex concepts and break them down into easy-to-understand, step-by-step instructions. He is particularly skilled at explaining the inner workings of the Roblox game engine, and how to use it to create visually appealing and engaging games. His tutorials cover a wide range of topics, from basic game development to more advanced programming concepts, making his channel a valuable resource for players of all skill levels. In addition to his technical expertise, YT_nooob is also known for his friendly and approachable style. He encourages his viewers to experiment and try things out for themselves, and he is always willing to help when someone is stuck. As a result, his channel has become a vibrant community of players who share tips and tricks, and help each other out with their projects. Overall, YT_nooob is an influential figure in the Roblox community, and his channel is a valuable resource for anyone who wants to learn how to create and optimize games within the platform. His easy-to-understand tutorials and helpful approach make him a popular choice for players of all skill levels."]
],
  [
  /who is kno\?|who created u|who created you|kno|knopka_01/i,
  ["I have been created by kno, a Roblox developer with more than 52k+ total Roblox game visits. This reply was also written by him! <3 Enjoy your day!"]
],
    [
/what time is it|time/i,
[new Date().toLocaleTimeString()]
],

[
/what date is it|date/i,
[new Date().toLocaleDateString()]
],
    [
/what is the weather like today/i,
["I'm sorry, I am an AI language model and I don't have access to live weather updates. You can check your local weather services for more information."]
],
    [
/what is your favorite song/i,
["As an AI language model, I do not have personal preferences or the capability to listen to music."]
],

[
/what is the capital of [a-zA-Z]+/i,
function (input) {
var city = input.match[0].split(" ").pop();
var capitals = {
"Albania": "Tirana",
"Algeria": "Algiers",
"Andorra": "Andorra la Vella",
"Angola": "Luanda",
"Antigua and Barbuda": "St. John's",
"Argentina": "Buenos Aires",
"Ukraine": "Kyiv",
"US": "Washington D.C."
};
return "The capital of " + city + " is " + (capitals[city] || "unknown");
}
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
