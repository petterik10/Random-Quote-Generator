
import React, { useState, useEffect } from "react";
import quotes from "./quotes";

function Quote() {

    // declare a state variable randomQuote with initial values
    const [randomQuote, setRandomQuote] = useState({
        title: "Nelson Mandela",
        content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        color: "#C70039"
    });

    // Changes the background color of body element 
    useEffect(() => { document.body.style.background = randomQuote.color });

    const getRandomQuote = () => {
        // generates a random number from the quotes array. 
        let randomNumber = Math.floor(Math.random() * quotes.length);
        // assign the new generated object to the randomQuote variable
        let randomQuote = quotes[randomNumber];

        // calling setRandomQuote function with new values as user clicks the button. 
        setRandomQuote({
            title: randomQuote.author,
            content: randomQuote.quote,
            color: randomQuote.color
        });
    }
    return (
        <div className="container">
            <div className="quote">
                <p class="text" style={{ color: randomQuote.color }}> "{randomQuote.content}" </p>
                <h4 id="author" style={{ color: randomQuote.color }}> -{randomQuote.title} </h4>
                <button
                    onClick={getRandomQuote}
                    style={{ backgroundColor: randomQuote.color }}
                >
                    New Quote
                 </button>
            </div>
        </div>
    )
}

export default Quote; 