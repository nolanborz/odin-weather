const weatherKey = process.env.WEATHER_API_KEY;

export async function getWeather(location) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${weatherKey}&contentType=json`);
    const data = await response.json();
    console.log('Raw weather data:', data);
    const parsedWeather = parseWeatherReport(data);
    console.log('Parsed weather condition:', parsedWeather);
    return parsedWeather;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function parseWeatherReport(report) {
  if (report && report.currentConditions && report.currentConditions.conditions) {
    return report.currentConditions.conditions;
  } else {
    console.error('Unexpected weather data structure:', report);
    return 'unknown';
  }
}