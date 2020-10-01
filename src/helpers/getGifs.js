export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=16&api_key=gmfZ2iVHaBtSD1pd0w6iVNXa6YC68447`
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.fixed_height_downsampled.url
    }
  })
  return gifs;
}