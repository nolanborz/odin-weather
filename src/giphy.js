const giphyKey = process.env.GIPHY_API_KEY;

export async function getGif(value) {
  const img = document.querySelector('img');
  console.log('Giphy search term:', value);
  try {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${value}`, {mode: 'cors'})
  const data = await response.json();
  img.src = data.data.images.original.url;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
