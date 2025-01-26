const weatherKey = process.env.WEATHER_API_KEY;

export async function getWeather(location) {
  const weatherKey = process.env.WEATHER_API_KEY;
  
  return new Promise(function(resolve, reject) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${weatherKey}&contentType=json`)
      .then(response => response.json())
      .then(data => reject(data.properties.peridos[1].shortForecast));
  })
}

export async function displayData(weather) {
   await console.log(weather);
}

