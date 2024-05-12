// API CALL  : NASA Photo Video Gallery
const APIurl = 'https://images-api.nasa.gov/search?q=apollo'
window.addEventListener('load', makeMediaRequest(APIurl))
window.addEventListener('load', searchMedia)
window.addEventListener('load', () => {
  let mediaSearchButton = document.getElementById('mediaSearchButton')
  mediaSearchButton.addEventListener('click', searchMedia)
})

function makeMediaRequest (APIurl) {
  console.log(`making request at ${APIurl}`)
  fetch(APIurl)
    .then(response => {
      return response.json()
    })
    .then(data => {
      galleryData = data
      console.log(data)
      Gallery(galleryData)
    })
    .catch(error => console.error(error))
}

// shows the media in gallery
function Gallery (data) {
  // makeMediaRequest(APIurl)
  // console.log(data.collection)
  for (i = 0; i < 49; i++) {
    let url = data.collection.items[i]

    let galleryContainer = document.createElement("div")

    fetch(url.href)
      .then(response => {
        return response.json()
      })
      .then(data => {
        // console.log(url.links[0].href)
        if (url.links[0].href.endsWith('.mp4')) {
          // console.log(url.links[0].href)
          htmlMedia(url.links[0].href, 'video')
        } else {
          // console.log(url.links[0].href)
          htmlMedia(url.links[0].href, 'img')
          
        }
      })
      .catch(error => console.error(error))
  }
  // galleryContainer => parentGalleryContainer
}

// generates html elements for gallery
function htmlMedia (data, element) {
  let galleryContainer = document.querySelector('#galleryContainer')
  let elem = document.createElement(element)
  elem.classList.add('mini-gallery-media')
  elem.src = data
  console.log('hello')
  console.log(galleryContainer.hasChildNodes)
  galleryContainer.appendChild(elem)
}

function searchMedia () {
  let inputMedia = document.getElementById('mediaInput')
  let query = inputMedia.value

  if (query) {
    // make a search request for the query
    makeMediaRequest(`https://images-api.nasa.gov/search?q=${query}`)
  }
}
