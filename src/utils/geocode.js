const request = require('request')

const geocode = (address, callback) => {

    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoidmt1bWFyNDg0OSIsImEiOiJja2xnM3pqengxZ3ZwMnBtMWcyazJqN2JrIn0.zIaX7IZpyu_eawCJOPScww&limit=1"
    request({url,json: true},(error,{body})=>{
    if(error)
    {
        console.log("There is no internet connection!, Please check agein!")
    }else if(body.features.length === 0)
    {
        console.log("Plese enter valid address to seach their location!")
    }else{
    
    callback(undefined, {
                latitude: body.features[0].center[1],
                 longitude: body.features[0].center[0],
               location: body.features[0].place_name
    })
    }
    })

}

module.exports = geocode