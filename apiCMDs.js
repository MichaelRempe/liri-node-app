const axios = require('axios'); //import axios module

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
    let url = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
    axios.get(url).then((response)=>{
        console.log(response);
    }, (error)=>{
        console.log(error);
    });
}
// API CALL TO OMDB endpoint
var accessMoives = (query)=>{
    let url = `https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`;
    axios.get(url).then((response)=>{
        console.log(response);
    }, (error)=>{
        console.log(error);
    });
}

module.exports ={
    accessConcerts: accessConcerts,
    accessSpotify: accessSpotify,
    accessMoives: accessMoives

}