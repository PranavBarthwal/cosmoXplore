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
      
      displayData(data.url, data.explanation, data.title, data.date, data.copyright )
     
  })
  .catch((error) => console.log(error))


  //function to display data in apod section
  function displayData(image, info, title, date, copyright){
    document.getElementById("apod_img").src = image
    document.getElementById("apod_info").textContent = info
    document.getElementById("title").textContent = title
    document.getElementById("date").textContent = date
    document.getElementById("copyright").textContent = copyright

  }




  // NASA API CALL 2 : Mars Rover Photos

  // fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ')
  // .then((response) => {
  //     return response.json()
  // }).then((data) => {
  //     console.log(data)
    
     
  // })
  // .catch((error) => console.log(error))


  document.getElementsByClassName('mars_button')[0].addEventListener('click', display_mars);

  function display_mars(){
    document.getElementsByClassName('rover_container')[0].style.display = none;
  }