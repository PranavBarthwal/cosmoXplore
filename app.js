// PARTICLES BACKGROUND

particlesJS("bg", {
    "particles": {
      "number": {
        "value": 650,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1.5,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });




// NASA API CALL 1 : APoD

  fetch('https://api.nasa.gov/planetary/apod?api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ')
  .then((response) => {
      return response.json()
  }).then((data) => {
      console.log(data)
      displayData(data.url, data.explanation, data.title, data.date, data.copyright,data.media_type)
  })
  .catch((error) => console.error(error))


  //function to display data in apod section
  function displayData(media, info, title, date, copyright,mediatype){
    if(mediatype === "video")  // Check media type
    {
      // Hide image container, display video container, and embed video
      document.querySelector(".img").style.display = "none"; 
      document.querySelector(".video").style.display = "block"; 
      const videoContainer = document.querySelector(".video");
      videoContainer.style.height = "80vh"; //Use viewport height (vh) for better responsiveness
 
      document.getElementById("apod_video").innerHTML = `<iframe width="100%" height="100%" src="${media}" frameborder="0" allowfullscreen></iframe>`;
  } else {
      // Hide video container, display image container, and set image source
      document.querySelector(".video").style.display = "none";
      document.querySelector(".img").style.display = "block"; 
      document.getElementById("apod_img").src = media; 
  }
  document.getElementById("apod_info").textContent = info;
  document.getElementById("title").textContent = title;
  document.getElementById("date").textContent = date;
  document.getElementById("copyright").textContent = copyright;
  }




  // NASA API CALL 2 : Mars Rover Photos
let photosArr;
function displayRover(){

  document.querySelector('.rover_container').style.display = 'none';
  document.querySelector('.rover_display').style.display = 'flex';

  let userDate = document.querySelector('.date_input').value;

  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userDate}&api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ`

  fetch(url)
  .then((response) => {
      return response.json()
  }).then((data) => {
      console.log(data)
     
      let img_src = data.photos[0].img_src;
      photosArr = data.photos;
      let date = data.photos[0].earth_date;
      let roverName = data.photos[0].rover.name;
      let camera = data.photos[0].camera.full_name;
      let launch = data.photos[0].rover.launch_date;
      let land = data.photos[0].rover.landing_date;
      let status = data.photos[0].rover.status;
      
      updateDom(img_src, date, roverName, camera, launch, land, status)    
     
  })
  .catch((error) => console.error(error))
  }

  function updateDom(img_src, date, roverName, camera, launch, land, status){

    document.querySelector('#roverImg').src = img_src
    document.querySelector('.date').textContent = date
    document.querySelector('.roverName').textContent = roverName
    document.querySelector('.camera').textContent = camera
    document.querySelector('.land').textContent = land
    document.querySelector('.launch').textContent = launch
    document.querySelector('.status').textContent = status
}

// added closeRover function 
function closeRoverDisplay(e){
  document.querySelector('.rover_container').style.display = 'flex';
  document.querySelector('.rover_display').style.display = 'none';
}

//MARS PHOTOS SLIDESHOW OF MULTIPLE CAMERAS
var slideIndex = 0; // Initialize slide index to 0
function plusDivs(n) {
  slideIndex += n;
  if (slideIndex >= photosArr.length) {
    slideIndex = 0; // Reset to first image if reached the end
  } else if (slideIndex < 0) {
    slideIndex = photosArr.length - 1; // Go to last image if reached the beginning
  }
  showDivs(slideIndex);
}

function showDivs(n) {
  var roverImg = document.querySelector('#roverImg');
  var cameraName = document.querySelector('.camera');
  if (photosArr.length > 0) {
    // Use modulo operator to ensure index wraps around correctly
    n = (n + photosArr.length) % photosArr.length;
    roverImg.src = photosArr[n].img_src;
    cameraName.textContent = photosArr[n].camera.full_name;
  }
}


// API CALL 3 : NASA Photo Video Gallery
fetch('https://images-api.nasa.gov/search?q=apollo')
  .then((response) => {
      return response.json()
  }).then((data) => {
      console.log(data)
     
  })
  .catch((error) => console.error(error))