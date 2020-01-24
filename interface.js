// require("dotenv").config(); // hide my spotify keys
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

const axios = require('axios');
const apiCMDs = require('./apiCMDs');

//Capture request and desired input from CLI
// Request correct api
// Return data, write to new file

try{
    let input = process.argv[2].split("-");
    let cmd = input[0].toLowerCase();
    let query = input[1].toLowerCase();

    switch (cmd) {
        case 'concert':
            console.log(query);
            break;
        case 'spotify':
            console.log(query);
            break;
        case 'movie':
            console.log(query);
            break;
        case 'random':
            console.log(query);
            break;
        default:
            console.log("Sorry somthing went wrong...");
    }
}
catch(error){
    // console.log(error);
    console.log("Invalid entry, required input: 'command-query'");
}
