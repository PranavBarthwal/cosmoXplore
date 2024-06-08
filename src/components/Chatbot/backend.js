const GOOGLE_API_URL = import.meta.env.VITE_GOOGLE_API_URL;
const API_KEY = import.meta.env.VITE_CHATBOT_API_KEY;
const CX = import.meta.env.VITE_CHATBOT_SEARCH_ENG_ID;


const greetings_responses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! What can I do for you?",
    "hi!": "Hey there! What would you like to learn today?",
    "how are you": "I'm just a bot, but I'm here to help you with NASA-related queries!",
    "thanks": "You're very welcome! Let me know if you need further assistance!",
    "thank you": "You're very welcome! Let me know if you need further assistance!",
    "bye": "Have a great day!",
    "bye bye": "Have a great day!"
};

const bannedWords = ['foul', 'improper', 'adultery', 'inappropriate',
'vulgar', 'obscene', 'profanity', 'explicit','offensive', 'indecent', 'lewd', 'pornography', 'love','husband', 'girlfriend', 'boyfriend', 'gf','bf','infidelity', 'cheating', 'betrayal', 'affair',
'forbidden', 'immoral', 'promiscuous', 'sleazy', 'sex', '18', 'kill', 'animals', 'makeup', 'marry', 'marraige','indecorous', 'salacious', 'debauchery', 'scandalous',
'licentious', 'depraved', 'unchaste', 'corrupt','disgraceful', 'sinful', 'sordid', 'perverted','taboo', 'degenerate', 'unclean', 'sinister',
'unethical', 'repugnant', 'wicked', 'naughty', 'movie', 'actor']; 

async function searchGoogle(query) {
    const params = new URLSearchParams({
        "key": API_KEY,
        "cx": CX,
        "q": query,
        "num": 1
    });
    const response = await fetch(`${GOOGLE_API_URL}?${params}`);
const data = await response.json();
if (response.ok) {
    if (data.items && data.items.length > 0) {
        const { title, link, snippet } = data.items[0];
        const snippetWords = snippet.split(' ');
        console.log("Snippet words length:", snippetWords.length); 
        const truncatedSnippetWords = snippetWords.slice(0, 60);
        let snippetMessage = truncatedSnippetWords.join(' ');
        let finalSnippetMessage = snippetMessage +=' Follow the link for more.';
        return {
            "title": title,
            "link": link,
            "snippet": finalSnippetMessage
        };
        } else {
            return { "title": "No results found", "link": "", "snippet": "" };
        }
    } else {
        throw new Error("Failed to fetch search results");
    }
}

async function getResponse(userInput) {
    const user_input = userInput.toLowerCase();
    if (!user_input) {
        throw new Error("Error: No input received");
    }


    const containsBannedWord = bannedWords.some(word => user_input.includes(word.toLowerCase()));

    if (containsBannedWord) {
        
        reportUserQuery(userInput);
        return "I'm sorry, I cannot respond to that.";
    }

    if (user_input in greetings_responses) {
        return greetings_responses[user_input];
    } else {
        try {
            const searchResult = await searchGoogle(user_input);
            
            const response = `Title: ${searchResult.title}<br/>Link: <a href="${searchResult.link}" target="_blank">${searchResult.link}</a><br/>Snippet: ${searchResult.snippet}`;

            return response;
        } catch (error) {
            return "I'm sorry, I couldn't find any information on that.";
        }
    }
}

function reportUserQuery(query) {
    
    console.log(`User query reported: ${query}`);
}

export { getResponse };
