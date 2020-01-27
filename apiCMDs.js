const axios = require('axios'); //import axios module
require("dotenv").config(); // hide my spotify keys
const Spotify = require('node-spotify-api');//import spotify api
const keys = require("./keys"); //import keys
const spotify = new Spotify(keys.spotify);//implement my keys
 
// API CALL TO 'bandsintown' endpoint
var accessConcerts = (query)=>{
    let url = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
    axios.get(url).then((response)=>{
        console.log(response.request);
    }, (error)=>{
        console.log(error);
    });
}
// API CALL TO Spotify endpoint
var accessSpotify = (query)=>{
   spotify.search({ type: 'track', query: query }, function(error, response) {
    if (error) {
      return console.log(error);
    }
    console.log(response.tracks.items[0]); 
    console.log("Album Title: "+response.tracks.items[0].album.name);
    console.log("Song: "+response.tracks.items[0].name);
    console.log("Artist/Band: "+response.tracks.items[0].artists[0].name);
    console.log("preview track here: "+response.tracks.items[0].preview_url);
});
}
// API CALL TO OMDB endpoint
var accessMoives = (query)=>{
    let url = `http://www.omdbapi.com/?apikey=32e4766d&s=${query}`;
    axios.get(url).then((response)=>{
        console.log(response.data);
        // console.log(response.data.Search);
        // console.log("Title: "+response.data.Search[0].Title);
        // console.log("Release Year: "+response.data.Search[0].Year);
        // console.log("Rating: "+ +"; courtesy of Roten Tomatoes");
        // console.log("Production Counrty: "+);
        // console.log("Plot: "+);
        // const actors = [];
        // for(let i=0; i< response.data.whatever; i++){ actors.push(response.data.wahtever[i])}
        // console.log("Actors: "+actors);
    }, (error)=>{
        console.log(error);
    });
}

module.exports ={
    accessConcerts: accessConcerts,
    accessSpotify: accessSpotify,
    accessMoives: accessMoives

}