const readline = require('readline'); // and we use Readline for quiz!

// and now we use var
var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("whats is your name? ", function(myname) {
    if(myname === "frenzy") {
        console.log("yes you are frenzy bro");
        // if you want to add the code below, you can
      // Example used this code for acces Executable key
   // Look the example used in (example.js)
        console.log("This Code Working!);
    } else {
        console.log("you're not frenzy sorry");
    }
});
