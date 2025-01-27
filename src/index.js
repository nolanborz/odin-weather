import { getWeather } from './weather.js';
import { getGif } from './giphy.js';

const weatherForm = document.getElementById('weather-search-form');
const weatherSearchBar = document.getElementById('weather-search-bar');

weatherForm.addEventListener('submit', async(e) => {
  const weatherCondition = await getWeather(e);
  getGif(e, weatherCondition);
});