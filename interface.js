const apiCMDs = require('./apiCMDs');
//Capture request and desired input from CLI
// Request correct api
// Return data, write to new file

//If CLI contains paramaters past base node call (node projectName.js)
if (process.argv.length > 2) {
    try {
        let cmd = process.argv[2].toLowerCase();
        let query = "";
        for (let i = 3; i < process.argv.length; i++) {
            query += process.argv[i].toLowerCase() + " ";
        }
        query = query.trim();

        const runCMD = (cmd) => {
            switch (cmd) {
                case 'concert':
                    if (query == "") {
                        query = "Motley Crue";
                    }
                    apiCMDs.accessConcerts(query);
                    break;
                case 'spotify':
                    if (query == "") {
                        query = "The Sign, Ace of Base";
                    }
                    apiCMDs.accessSpotify(query);
                    break;
                case 'movie':
                    if (query == "") {
                        query = "Mr.Nobody";
                    }
                    apiCMDs.accessMoives(query);
                    break;
                case 'random':
                    console.log("Generating random search...");
                    //This was just for fun, I wanted to have a visual indicator to display that an api was being called. This isnt actually setup in connection to the promise response, so it runs reguardless but it was still fun to figure out.
                    let timer = 3;
                    const countDown = setInterval(() => {
                        console.log("*");
                        timer--;
                        if (timer <= 0) {
                            clearInterval(countDown);
                            const cmdList = ["moive", "spotify", "concert"]; // command list
                            let r = Math.floor(Math.random() * cmdList.length); // random num
                            runCMD(cmdList[r]); //recall runCMD with random command
                        }
                    }, 1000);
                    break;
                default:
                    console.log("Sorry somthing went wrong...");
            }
        }
        runCMD(cmd);
    }
    catch (error) {
        console.log(error);
        console.log("Invalid entry, required input: 'command-query'");
    }
} else { console.log("Invalid Entry, must provide command: [movie-query, concert-query, spotify-query]") }

