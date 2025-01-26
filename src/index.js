import { getWeather } from './weather.js';
import { getGif } from './giphy.js';

const form = document.getElementById('searcher-form');
const searchBar = document.getElementById('searchBar');









form.addEventListener('submit', getGif);