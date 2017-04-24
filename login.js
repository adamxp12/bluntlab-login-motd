var colour = require('colour'),
    os = require('os');
console.log("    "+"Welcome to ".grey+os.hostname().rainbow.bold);
console.log("    "+"OS:".grey+os.type().yellow.bold+" Ver: ".grey+os.release().yellow.bold)