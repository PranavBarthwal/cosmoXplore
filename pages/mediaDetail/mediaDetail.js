let nasa_id = window.sessionStorage.getItem('nasa_id')
let mediaURL = window.sessionStorage.getItem('mediaURL')

// make api request to fetch metadata
fetch(`https://images-api.nasa.gov/metadata/${nasa_id}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    fetchMetaData(data.location)
  })
  .catch(error => {
    console.error(error)
  })

function fetchMetaData (location) {
  fetch(location)
    .then(response => {
      return response.json()
    })
    .then(data => {
      putDataInHTML(mediaURL, data)
    })
    .catch(error => {
      console.error(error)
    })
}

function putDataInHTML (src, data) {
  let media = document.querySelector('#media')
  let mediaData = document.querySelector('#metaData')

  if (data['AVAIL:MediaType'] === 'image') {
    let img = document.createElement('img')
    img.src = src
    console.log(src)
    media.appendChild(img)
  } else {
    // search for mp4 url of video
    fetch(`https://images-api.nasa.gov/asset/${nasa_id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        let count = 2
        for (i = 0; i < data.collection.items.length; i++) {
          console.log('hello')
          let url = String(data.collection.items[i].href)
          if (url.endsWith('mp4')) {
            if (count != 0) {
              let video = document.createElement('video')
              video.src = url
              video.setAttribute('controls', '')
              video.style.width = '45vw'
              media.appendChild(video)
            }
            count--
            break
          }
        }
        // console.log("http://images-assets.nasa.gov/video/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW/T803048_EGRESS-TRAINING-IN-THE-GULF-OF-MEXICO-WITH-APOLLO-8-BACKUP-CREW~large.mp4")
      })
      .catch(error => {
        console.log('error')
        console.error(error)
      })
  }

  if (data['AVAIL:Center']) {
    mediaData.innerHTML += `Center : ${data['AVAIL:Center']} <br><br>`
  }
  if (data['AVAIL:DateCreated']) {
    mediaData.innerHTML += `DateCreated : ${data['AVAIL:DateCreated']} <br><br>`
  }
  if (data['AVAIL:Description']) {
    mediaData.innerHTML += `Description : ${data['AVAIL:Description']} <br><br>`
  }
  if (data['AVAIL:Keywords']) {
    mediaData.innerHTML += `Keywords : ${data['AVAIL:Keywords']} <br><br>`
  }
  if (data['AVAIL:NASAID']) {
    mediaData.innerHTML += `NASAID : ${data['AVAIL:NASAID']} <br><br>`
  }
  if (data['AVAIL:Owner']) {
    mediaData.innerHTML += `Owner : ${data['AVAIL:Owner']} <br><br>`
  }
}
