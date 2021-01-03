export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=dgXUvvwqDV4tuOW2xSV3I3bR69u0FCoS`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url, // el ? es condicion de que si viene 'images' se utilice
    }
  })

  // console.log(gifs)

  return gifs // retorna un a promesa que debe resolverse
}
