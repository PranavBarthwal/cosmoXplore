// NASA API CALL 1 : APoD
console.log("asdsa");
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    displayData(
      data.url,
      data.explanation,
      data.title,
      data.date,
      data.copyright
    );
  })
  .catch((error) => console.error(error));

//function to display data in apod section
function displayData(image, info, title, date, copyright) {
  document.getElementById("apod_img").src = image;
  document.getElementById("apod_info").textContent = info;
  document.getElementById("title").textContent = title;
  document.getElementById("date").textContent = date;
  document.getElementById("copyright").textContent = copyright;
}

// NASA API CALL 2 : Mars Rover Photos
function displayRover() {
  document.querySelector(".rover_container").style.display = "none";
  document.querySelector(".rover_display").style.display = "flex";

  let userDate = document.querySelector(".date_input").value;

  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userDate}&api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let img_src = data.photos[0].img_src;
      let date = data.photos[0].earth_date;
      let roverName = data.photos[0].rover.name;
      let camera = data.photos[0].camera.full_name;
      let launch = data.photos[0].rover.launch_date;
      let land = data.photos[0].rover.landing_date;
      let status = data.photos[0].rover.status;

      updateDom(img_src, date, roverName, camera, launch, land, status);
    })
    .catch((error) => console.error(error));
}

function updateDom(img_src, date, roverName, camera, launch, land, status) {
  document.querySelector("#roverImg").src = img_src;
  document.querySelector(".date").textContent = date;
  document.querySelector(".roverName").textContent = roverName;
  document.querySelector(".camera").textContent = camera;
  document.querySelector(".land").textContent = land;
  document.querySelector(".launch").textContent = launch;
  document.querySelector(".status").textContent = status;
}

// API CALL 3 : NASA Photo Video Gallery
fetch("https://images-api.nasa.gov/search?q=apollo")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

// changed the function and applied media query for apod_img
function removeClasses() {
  var element = document.getElementById("class_removal");
  element.classList.remove("rounded-3", "border");
}

var mediaQuery = window.matchMedia("(max-width: 765px)");
function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    removeClasses();
  }
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);
