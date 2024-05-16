import React from "react";
import img from "../assets/mars.png";

function DefaultDisplay() {
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
  return (
    <>
      <div className="rover_container">
        <div className="rover_section_img">
          <img src={img} className="mars_illus" alt="Mars" />
        </div>
        <div className="rover_section_text">
          <p className="rover_section_para">
            Welcome to an extraordinary adventure into the Martian landscape,
            where we invite you to explore the wonders of the Red Planet through
            the lens of various rovers that have traversed its surface. Our
            journey takes us deep into the photographic archives, a treasure
            trove of captivating images captured by these robotic explorers.
            Each rover, armed with sophisticated cameras, has documented the
            Martian terrain, unveiling its mysteries one snapshot at a time. The
            heart of this exploration lies in a comprehensive database
            meticulously organized to offer you an unparalleled visual chronicle
            of Mars' exploration. This repository is a testament to the marvels
            of technology and the spirit of scientific curiosity that drives
            humanity to push the boundaries of exploration. But how do you, the
            explorer, access this vast collection? Fear not, for we present a
            user-friendly approach that allows you to effortlessly navigate
            through the visual wonders of Mars. By simply entering the Earth
            date corresponding to a specific photo, you unlock a portal to the
            Red Planet's past, witnessing moments frozen in time by the lenses
            of our robotic companions. The convenience of this method provides
            unparalleled flexibility, enabling you to tailor your exploration
            based on your interests. Whether you're drawn to the intricate
            geological formations that dot the Martian surface, mesmerized by
            the dance of atmospheric phenomena in the thin Martian air, or
            captivated by the milestones achieved by the rovers themselves, our
            immersive experience ensures that your curiosity is rewarded. This
            journey offers a deeper understanding of Mars' unique features and
            the scientific endeavors that drive these robotic explorers. From
            the striking landscapes to the subtle details that tell the story of
            a planet's evolution, each image contributes to our collective
            knowledge of the Red Planet. Join us in unlocking the mysteries of
            Mars as we navigate through the cutting-edge technology and
            unparalleled exploration that has brought us face to face with the
            enigmatic Red Planet.
          </p>
        </div>
      </div>
      <div className="ip">
        <div className="input-group mb-4 input_container">
          <input
            className="date_input form-control"
            type="text"
            name="date"
            placeholder="Enter the date for retrieving Mars Rover Images. (YYYY-MM-DD)"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-primary mars_button"
            type="button"
            id="button-addon2"
            onClick={displayRover}
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default DefaultDisplay;
