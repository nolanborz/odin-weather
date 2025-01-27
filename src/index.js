import { getWeather } from './weather.js';
import { getGif } from './giphy.js';

const weatherForm = document.getElementById('weather-search-form');
const weatherSearchBar = document.getElementById('weather-search-bar');
const loader = document.querySelector('.loader');

toggleLoader(false);

weatherForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  toggleLoader(true);

  try {
  const weatherCondition = await getWeather(weatherSearchBar.value);
  await getGif(weatherCondition);
} catch (error) {
  console.error('Error:', error);
  
} finally {
  //deactivate loader nomatter the outcome
  toggleLoader(false);
}
});

function toggleLoader(show) {
  loader.style.display = show ? 'block' : 'none';
}
