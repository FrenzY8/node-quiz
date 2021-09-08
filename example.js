const readline = require('readline'); // and we use Readline for quiz!
// and now we use var
var rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout // and done, now letsgo to the code
});

rl.question("whats is your name?", function(myname) {
    if(myname === "frenzy") {
        console.log("please wait the loading");
        let text = ["|", "/", "-", "\\"];
let current = 0;
let endTime = 5000; // 5 seconds in ms
let interval = setInterval(() => {
    if (current === text.length) current = 0;
    let loadingText = text[current];
    let txt = `[ ${loadingText} ] loading`
    process.stdout.write("\r" + txt);
    current++
}, 300)
setTimeout(() => clearInterval(interval), endTime)
    } else {
        console.log("you're not frenzy sorry you cant");
    }
});
