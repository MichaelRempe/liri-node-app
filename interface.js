// require("dotenv").config(); // hide my spotify keys
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

// const axios = require('axios');
const apiCMDs = require('./apiCMDs');

//Capture request and desired input from CLI
// Request correct api
// Return data, write to new file

if(process.argv.length>2){
    try{
        let cmd = process.argv[2].toLowerCase();
        let query = ""
        for(let i=3; i<process.argv.length; i++){
            query+= process.argv[i].toLowerCase()+" ";
        }
        query=query.trim();

        switch (cmd) {
            case 'concert':
                apiCMDs.accessConcerts(query);
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
        console.log(error);
        console.log("Invalid entry, required input: 'command-query'");
    }
}else{console.log("Invalid Entry")}

