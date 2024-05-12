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
      Gallery(galleryData)
    })
    .catch(error => console.error(error))
}

// shows the media in gallery
function Gallery (data) {
  let promises = []
  // using array, so that we can pass it as reference to the htmlMedia function, because strings are passed as copies
  let childrenHTML = ['']

  for (let i = 0; i < 49; i++) {
    let url = data.collection.items[i]
    let nasa_id = data.collection.items[i].data[0].nasa_id

    let promise = fetch(url.href)
      .then(response => response.json())
      .then(data => {
        let elementType = url.links[0].href.endsWith('.mp4') ? 'video' : 'img'
        htmlMedia(url.links[0].href, elementType, childrenHTML, nasa_id)
      })
      .catch(error => console.error(error))

    promises.push(promise)
  }

  // when all promises resolve, we add the accumulated html, otherwise, the html would return empty string, because it would execute before promises
  Promise.all(promises).then(() => {
    let galleryContainer = document.querySelector('#galleryContainer')
    galleryContainer.innerHTML = childrenHTML[0]

    // whenever a media is clicked, it is directed to detail page
    for (img of galleryContainer.children) {
      img.addEventListener('click', function () {
        openDetailPage(img.id)
      })
    }
  })
}

// generates html elements for gallery media
function htmlMedia (data, element, childrenHTML, nasa_id) {
  let elem = document.createElement(element)
  elem.classList.add('mini-gallery-media')
  elem.src = data
  elem.id = nasa_id

  childrenHTML[0] += elem.outerHTML
}

function openDetailPage (id) {
  window.location.href = '/mediaDetail.html'

}

// when user search, this function makes API request for that query.
function searchMedia () {
  let inputMedia = document.getElementById('mediaInput')
  let query = inputMedia.value

  if (query) {
    // make a search request for the query
    makeMediaRequest(`https://images-api.nasa.gov/search?q=${query}`)
  }
}
