// API CALL  : NASA Photo Video Gallery
const APIurl = 'https://images-api.nasa.gov/search?q=apollo'
window.addEventListener('load', makeMediaRequest(APIurl))
window.addEventListener('load', searchMedia)
window.addEventListener('load', () => {
  let mediaSearchButton = document.getElementById('mediaSearchButton')
  mediaSearchButton.addEventListener('click', searchMedia)
})

// makes request for media
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
  let childrenHTML = ['']

  // show only 50 or less media at a time
  for (let i = 0; i < 49; i++) {
    let url = data.collection.items[i]
    let nasa_id = data.collection.items[i].data[0].nasa_id
    let media_type = data.collection.items[i].data[0].media_type

    // find the exact url for jpg image for showing in gallery, for every media
    let promise = fetch(url.href)
      .then(response => response.json())
      .then(data => {
        let link = url.links[0]

        htmlMedia(link.href, childrenHTML, nasa_id, media_type)
      })
      .catch(error => console.error(error))

    promises.push(promise)
  }

  // when all promises resolve, we add the accumulated html
  Promise.all(promises).then(() => {
    let galleryContainer = document.querySelector('#galleryContainer')
    galleryContainer.innerHTML = childrenHTML[0]

    // Add event listener to each image
    for (let media of galleryContainer.children) {
      ;(function (id, src, type) {
        let nextPageURL
        // if (type === 'image') {
        //   nextPageURL = src
        // } else {
        //   // it is a video, and the url will be with extension mp4
        // }
        media.addEventListener('click', function () {
          openDetailPage(id, src)
        })
      })(media.id, media.src, media.media_type)
    }
  })
}

// generates html elements for gallery media
function htmlMedia (data, childrenHTML, nasa_id, media_type) {
  let elem = document.createElement('img')
  elem.classList.add('mini-gallery-media')
  elem.src = data
  elem.id = nasa_id
  elem.type = media_type


  childrenHTML[0] += elem.outerHTML
}

// when user clicks on a media, the function redirects them to detail page for that media
function openDetailPage (id) {
  window.location.href = '/mediaDetail.html'
  window.sessionStorage.setItem('nasa_id', id)
  // window.sessionStorage.setItem('mediaURL', mediaURL)
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

// when user clicks
