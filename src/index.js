import { getWeather } from './weather.js';
import { getGif } from './giphy.js';

const weatherForm = document.getElementById('weather-search-form');
const weatherSearchBar = document.getElementById('weather-search-bar');
const loader = document.querySelector('.loader');

toggleLoader(false);


weatherForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  
  // Show loader before fetching data
  toggleLoader(true);

  try {
    const weatherCondition = await getWeather(weatherSearchBar.value);
    console.log('Weather condition:', weatherCondition);
    if (weatherCondition && weatherCondition !== 'unknown') {
      await getGif(weatherCondition);
    } else {
      console.error('Invalid weather condition:', weatherCondition);
      // Handle invalid weather condition (e.g., display error message to user)
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle error (e.g., display error message to user)
  } finally {
    // Hide loader after fetching is complete (whether successful or not)
    toggleLoader(false);
  }
});

function toggleLoader(show) {
  loader.style.display = show ? 'block' : 'none';
}
