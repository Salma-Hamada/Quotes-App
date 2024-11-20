const Quotes=[
    {'author': 'Jim Rohn', 
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
        'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

// function to get random quote =>Math.random()
function getRandomQuote() 
{
    var random = Math.floor(Math.random() * Quotes.length);
    document.querySelector("#quote").classList.remove("d-none");
    document.querySelector("#quote").classList.add("d-block");
    document.querySelector("#quote").innerHTML = `<p id="quote">${Quotes[random].quote}</p`;
    
    document.querySelector("#author").classList.remove("d-none");
    document.querySelector("#author").classList.add("d-block");
    document.querySelector("#author").innerHTML = `<p id="author">${Quotes[random].author}</p`;
}

