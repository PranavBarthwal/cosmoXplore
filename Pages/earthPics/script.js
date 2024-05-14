

// PARTICLES BACKGROUND
particlesJS("bg-ast", {
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
// PARTICLES BACKGROUND
particlesJS("bg-ast", {
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

// Rest of the logic
// Function to fetch NASA EPIC images for a given latitude and longitude
// Function to fetch NASA EPIC images for today_minus_3's date and given latitude and longitude
function fetchEPICImages(latitude, longitude) {
    // Get today_minus_3's date in YYYY-MM-DD format
    // Get today_minus_3's date

    
    // if (min.lat > max.lat || (min.lat === max.lat && min.lon > max.lon)) 
    
    let today_minus_3 = new Date();

// Subtract 3 days
today_minus_3.setDate(today_minus_3.getDate() - 3);

// Format the date as ISO string
today_minus_3 = today_minus_3.toISOString().split('T')[0];


    // Form the request URL for EPIC images for today_minus_3's date and given location
    const imageUrl = `https://api.nasa.gov/EPIC/api/natural/date/${today_minus_3}?api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ`;
    
    // Fetch EPIC images for today_minus_3's date
    fetch(imageUrl)
    .then(response => {
        return response.json(); // Convert response to JSON
    })
    .then(images => {
        // Calculate distances of all images from the specified latitude and longitude
        const imageObjects = images.map(image => {
            return {
                centroid_coordinates: {
                    lat: image.centroid_coordinates.lat,
                    lon: image.centroid_coordinates.lon
                },
                caption: image.caption,
                imageUrl: image.image,
                dscovr_j2000_position: image.dscovr_j2000_position,
                lunar_j2000_position: image.lunar_j2000_position,
                sun_j2000_position: image.sun_j2000_position,
                attitude_quaternions: image.attitude_quaternions
            };
        });
        

        let min = { lat: latitude, lon: longitude };
        let minDifference = Infinity;
        let nearestCoordinate = null;
        
        imageObjects.forEach(coord => {
            // Calculate the difference in latitude and longitude
            let latDiff = Math.abs(coord.centroid_coordinates.lat - min.lat);
            let lonDiff = Math.abs(coord.centroid_coordinates.lon - min.lon);
            
            // Calculate the Euclidean distance
            let distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
            // Check if this distance is smaller than the current minimum difference
            if (distance < minDifference) {
                minDifference = distance;
                nearestCoordinate = coord;
            }
        });
        
        console.log(nearestCoordinate.attitude_quaternions)
        const data=()=>{
            return `<div class="image"></div>
            <div class="info">
                <div class="img_info">
                    <strong class="sat_info">This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</strong>
                </div>
        
                <div class="coord">
                <div class="row_1">
                <div class="dscovr satellite">
                    <p class="text">DSCOVR J2000</p>
                    <p class="inf_1 sat_information">
                    <span className="x">X:${nearestCoordinate.dscovr_j2000_position.x}</span>
                    <span className="y">Y:${nearestCoordinate.dscovr_j2000_position.y}</span>
                    <br>
                    <span className="z">Z:${nearestCoordinate.dscovr_j2000_position.z}</span>
                    </p>
                </div>
                <div class="lunar satellite">
                    <p class="text">LUNAR J2000</p>
                    <p class="inf_2 sat_information">
                    <span className="x">X:${nearestCoordinate.lunar_j2000_position.x}</span>
                    <span className="y">Y:${nearestCoordinate.lunar_j2000_position.y}</span>
                    <br>
                    <span className="z">Z:${nearestCoordinate.lunar_j2000_position.z}</span>
                    </p>
                </div>
            </div>
            
            <div class="row_2">
                <div class="j2000 satellite">
                    <p class="text">SOLAR J200</p>
                    <p class="inf_3 sat_information">
                    <span className="x">X:${nearestCoordinate.sun_j2000_position.x}</span>
                    <span className="y">Y:${nearestCoordinate.sun_j2000_position.y}</span>
                    <br>
                    <span className="z">Z:${nearestCoordinate.sun_j2000_position.z}</span>
                    </p>
                </div>
                <div class="attitude satellite">
                    <p class="text">ATTITUDE QUATERNIONS
                  </p>
                  <p class="inf_4 sat_information">
                    <span className="q0">Q0:${nearestCoordinate.attitude_quaternions.q0}</span>
                    <span className="q1">Q1:${nearestCoordinate.attitude_quaternions.q1}</span>
                    <br>     
            <span className="q2">Q2:${nearestCoordinate.attitude_quaternions.q2}</span>
            <span className="q3">Q3:${nearestCoordinate.attitude_quaternions.q3}</span>
            
                    </p>
                </div>
            </div>
        </div>
            </div>
        </div>`
        }
        document.querySelector(".flex_container").innerHTML=data()
// Get today_minus_3's date
today_minus_3 = new Date();

// Subtract 3 days
today_minus_3.setDate(today_minus_3.getDate() - 3);

// Format the date as "YYYY/MM/DD"
today_minus_3 = today_minus_3.toISOString().split('T')[0].replace(/-/g, '/');

document.querySelector(".image").innerHTML=`<img id="fetch_img" src="https://epic.gsfc.nasa.gov/archive/natural/${today_minus_3}/png/${nearestCoordinate.imageUrl}.png">`
    })
    
}
function fetchImg(){
    if(document.querySelector('#lat').value==""|| document.querySelector('#lon').value==""){
        alert("Pls enter both values or select get location")
    }
    else{
fetchEPICImages(document.querySelector('#lat').value,document.querySelector('#lon').value);
}
}
function fetchImg_auto() {
    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

// Success callback function for geolocation
function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetchEPICImages(latitude, longitude);
}

// Error callback function for geolocation
function errorCallback(error) {
    console.error("Error getting user's location:", error.message);
}

