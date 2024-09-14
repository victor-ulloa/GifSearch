const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const gifContainer = document.getElementById('gifContainer')

const apiKey = 'rZiaYi4NwGFLmiIcso317hhsIXWBFV1p'
const apiUrl = 'https://api.giphy.com/v1/gifs/search?'

async function fetchGifs(query) {
  const url = `${apiUrl}api_key=${apiKey}&q=${query}&limit=12`
  const response = await fetch(url)
  const data = await response.json()
  return data.data
}

function displayGifs(gifs) {
  gifContainer.innerHTML = ''
  gifs.forEach(gif => {
    const img = document.createElement('img')
    img.src = gif.images.fixed_height.url
    img.alt = gif.title
    gifContainer.appendChild(img)
  })
}

searchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim()
  if (query) {
    const gifs = await fetchGifs(query)
    displayGifs(gifs)
  }
})