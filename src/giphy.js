const searchBar = document.getElementById('searchBar');
const giphyKey = process.env.GIPHY_API_KEY;

export async function getGif(e, value) {
  e.preventDefault();
  const img = document.querySelector('img');
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${value}`, {mode: 'cors'})
  .then(response => response.json()) 
  .then(response => {
    img.src = response.data.images.original.url;
  });
}
