const weatherKey = process.env.WEATHER_API_KEY;

export async function getWeather(e) {
 e.preventDefault();
 const location = weatherSearchBar.value;
 try {
   const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${weatherKey}&contentType=json`);
   const data = await response.json();
   return parseWeatherReport(data);
  } catch (error) {
   console.error('Error:', error);
 }
}

function parseWeatherReport(report) {
  const weather = report.currentConditions.conditions;
  return weather;
}

const weatherSearchBar = document.getElementById('weather-search-bar');