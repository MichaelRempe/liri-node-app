const axios = require('axios'); //import axios module
require("dotenv").config(); // hide my spotify keys
const Spotify = require('node-spotify-api');//import spotify api
const keys = require("./keys"); //import keys
const spotify = new Spotify(keys.spotify);//implement my keys

var moment = require('moment');
 
// API CALL TO 'bandsintown' endpoint
var accessConcerts = (query)=>{
    let url = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
    axios.get(url).then((response)=>{
        if(response.data.length == 0){
            console.log("Sorry, no events were found");
        }
        for(let i=0; i<response.data.length; i++){
            console.log("----------------------------------------")
            console.log(`EVENT [${i}]`)
            console.log("Artist: "+response.data[i].lineup[0]);
            console.log("Venue: "+response.data[i].venue.name);
            console.log("Location: "+response.data[i].venue.city+" "+response.data[i].venue.region                          +", "+response.data[i].venue.country);
            console.log("Date Event: "+ moment(response.data[0].datetime).format("L"));
            console.log("----------------------------------------")
            console.log("\n");
        }
       
    }, (error)=>{
        console.log(error);
    });
}
// API CALL TO Spotify endpoint
var accessSpotify = (query)=>{
   spotify.search({type:'track', query: query}, function(error, response) {
    if (error) {
      return console.log(error);
    }
    console.log("--------------------------------------------------");
    console.log("\n");
    console.log("Album Title: "+response.tracks.items[0].album.name);
    console.log("Song: "+response.tracks.items[0].name);
    console.log("Artist/Band: "+response.tracks.items[0].artists[0].name);
    console.log("preview track here: "+response.tracks.items[0].preview_url);
    console.log("\n");
    console.log("--------------------------------------------------");
});
}
// API CALL TO OMDB endpoint
var accessMoives = (query)=>{
    // let url = `http://www.omdbapi.com/?apikey=32e4766d&s=${query}`;
    let url = `http://www.omdbapi.com/?apikey=32e4766d&t=${query}`;
    axios.get(url).then((response)=>{
        console.log("--------------------------------------------------");
        console.log("\n");
        console.log("Title: "+response.data.Title);
        console.log("Release Year: "+response.data.Year);
        console.log("Rating: "+response.data.Ratings[0].Value+"; courtesy of IMDB");
        console.log("Rating: "+response.data.Ratings[1].Value+"; courtesy of Roten Tomatoes");
        console.log("Production Counrty: "+response.data.Country);
        console.log("Plot: "+response.data.Plot);
        console.log("Actors: "+response.data.Actors);
        console.log("\n");
        console.log("--------------------------------------------------");
    }, (error)=>{
        console.log(error);
    });
}

module.exports ={
    accessConcerts: accessConcerts,
    accessSpotify: accessSpotify,
    accessMoives: accessMoives

}