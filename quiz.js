const readline = require('readline'); // and we use Readline for quiz!

// and now we use var
var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("whats is your name? ", function(myname) {
    if(myname === "frenzy") {
        console.log("yes you are frenzy bro");
    } else {
        console.log("you're not frenzy sorry");
    }
});
