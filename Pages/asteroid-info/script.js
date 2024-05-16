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

// Search button and the asteroid-info-div
let searchBtn = document.querySelector("#dates-submit-btn");
let asteroidInfoDiv = document.querySelector(".asteroid-info");

// Variables for constructing the URL
var startDateInput;
var endDateInput;

// Function to construct the URL
function constructURL(startDate, endDate) {
    return `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ`; 
}

// Checks for change event in the starting date input
document.getElementById("starting-date").addEventListener("change", function() {
    startDateInput = this.value; 

    if (startDateInput && endDateInput) {
        var url = constructURL(startDateInput, endDateInput);
    }
});

// Checks for change is ending date input
document.getElementById("ending-date").addEventListener("change", function() {
    endDateInput = this.value; 
 
    if (startDateInput && endDateInput) {
        var url = constructURL(startDateInput, endDateInput);
    }
});

// Function for the API call and putting all the values into the DOM elements
function neows(inputUrl, sdi) {
    fetch(inputUrl).then((response) => {
        return response.json()
    }).then((data) => {
        let asteroidName = data.near_earth_objects[sdi][0].name;
        let estDiameterMinimum = data.near_earth_objects[sdi][0].estimated_diameter.kilometers.estimated_diameter_min;
        let estDiameterMaximum = data.near_earth_objects[sdi][0].estimated_diameter.kilometers.estimated_diameter_max;
        let potentialHazard = data.near_earth_objects[sdi][0].is_potentially_hazardous_asteroid;
        let closeApproachDate = data.near_earth_objects[sdi][0].close_approach_data[0].close_approach_date;
        let relativeVelocitySec = data.near_earth_objects[sdi][0].close_approach_data[0].relative_velocity.kilometers_per_second;
        let relativeVelocityHr = data.near_earth_objects[sdi][0].close_approach_data[0].relative_velocity.kilometers_per_hour;
        let orbitingBody = data.near_earth_objects[sdi][0].close_approach_data[0].orbiting_body;
        let isSentryObject = data.near_earth_objects[sdi][0].is_sentry_object;

        let sentryVal;
        if (isSentryObject){
            sentryVal = "Yes";
        } else {
            sentryVal = "No";
        }

        let hazardVal;
        if (potentialHazard) {
            hazardVal = "Yes";
        } else {
            hazardVal = "No";
        }

        document.querySelector("#asteroid-name").innerHTML = asteroidName;

        document.querySelector("#estDiaMin").innerHTML = estDiameterMinimum.toFixed(3);
        document.querySelector("#estDiaMax").innerHTML = estDiameterMaximum.toFixed(3);

        document.querySelector("#potentialHazardVal").innerHTML = hazardVal;

        document.querySelector("#closeApproachDate").innerHTML = closeApproachDate;

        document.querySelector("#relVelocitySec").innerHTML = relativeVelocitySec;
        document.querySelector("#relVelocityHr").innerHTML = relativeVelocityHr;

        document.querySelector("#orbitingBodyVal").innerHTML = orbitingBody;

        document.querySelector("#sentryObjectVal").innerHTML = sentryVal;

        asteroidInfoDiv.style.display = "block"
    })

}

// Event listener for the Search Button
searchBtn.addEventListener("click", () => {
    if (startDateInput && endDateInput) {

        let milStartDate = new Date(startDateInput);
        let milEndDate = new Date(endDateInput);
        let differenceInMilliseconds = milEndDate - milStartDate;
        let differenceInDays = (differenceInMilliseconds / (1000 * 60 * 60 * 24))

        if (differenceInDays < 7) {
            var url = constructURL(startDateInput, endDateInput);
            neows(url, startDateInput);
        } else {
            alert("Date range should not exceed 7")
        }
    } else [
        alert("Date input cannot be empty")
    ]
})
