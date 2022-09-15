// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = 
[{

    quote: `"Prose is architecture, not interior decoration."`,
 person: `Ernest Hemingway`
},{
    quote: `"It's none of their business that you have to learn to write. Let them think you were born that way."`,
 person: `Ernest Hemingway`
},{
    quote: `"Most writers regard the truth as their most valuable possession, and therefore are most economical in its use."`,
 person: `Mark Twain`
},{
    quote: `"And as imagination bodies forth
    The forms of things unknown, the poet's pen
    Turns them to shapes and gives to airy nothing
    A local habitation and a name."`,
  person: `William Shakespeare`
},{
    quote: `"If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn't matter a damn how you write."`,
 person: `Somerset Maugham`
},{
    quote: `"To produce a mighty book, you must choose a mighty theme."`,
 person: `Herman Melville`
},{
    quote: `"It is perfectly okay to write garbage—as long as you edit brilliantly."`,
 person: `C. J. Cherryh`
},{
    quote: `"It took me fifteen years to discover I had no talent for writing, but I couldn't give it up because by that time I was too famous."`,
 person: `Robert Benchley`
},{
    quote: `"Any man who keeps working is not a failure. He may not be a great writer, but if he applies the old-fashioned virtues of hard, constant labor, he'll eventually make some kind of career for himself as writer."`,
 person: `Ray Bradbury`
},{
    quote: `"A blank piece of paper is God's way of telling us how hard it to be God."`,
 person: `Sidney Sheldon`
},{
    quote: `"Not that the story need be long, but it will take a long while to make it short."`,
 person: `Henry David Thoreau`
}, ];

btn.addEventListener(`click`, function(){
    let random = Math.floor(Math.random() *  quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})