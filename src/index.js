import { getWeather } from './weather.js';
import { displayData } from './weather.js';
import { getGif } from './giphy.js';

const form = document.getElementById('searcher-form');
const searchBar = document.getElementById('searchBar');
const weatherForm = document.getElementById('weather-search-form');
const weatherSearchBar = document.getElementById('weather-search-bar');

form.addEventListener('submit', getGif);
weatherForm.addEventListener('submit', displayData());