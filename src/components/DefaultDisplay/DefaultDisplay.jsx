import React, { useState } from "react";
import img from "../../assets/mars.png";
import DisplayDetails from "../DisplayDetails/DisplayDetails.jsx";

function DefaultDisplay() {

  const [showDefault, setShowDefault] = useState(true);
  const [userDate, setUserDate] = useState("");
  const [roverInfo, setRoverInfo] = useState({
    url: "",
    earthDate: "",
    roverName: "",
    cameraName: "",
    launchDate: "",
    landingDate: "",
    status: ""
  })

  async function displayRover(e) {
    try {

      if (userDate == "") {
        alert("Enter Date")
        return
      }

      e.preventDefault();

      setShowDefault((prev) => {
        return false;
      })

      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userDate}&api_key=${import.meta.env.VITE_API_KEY}`;

      let response = await fetch(url);

      response = await response.json();

      const image_from_rover = response.photos[0];

      setRoverInfo((prev) => {
        return { ...prev, url: image_from_rover.img_src, earthDate: image_from_rover.earth_date, roverName: image_from_rover.rover.name, cameraName: image_from_rover.camera.full_name, launchDate: image_from_rover.rover.launch_date, landingDate: image_from_rover.rover.landing_date, status: image_from_rover.rover.status };
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {showDefault ?

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
              Martian terrain, unveiling its mysteries one snapshot at a time.
              This repository is a testament to the marvels of technology and
              the spirit of scientific curiosity that drives
              humanity to push the boundaries of exploration. But how do you, the
              explorer, access this vast collection? Fear not, for we present a
              user-friendly approach that allows you to effortlessly navigate
              through the visual wonders of Mars. By simply entering the Earth
              date corresponding to a specific photo, you unlock a portal to the
              Red Planet's past, witnessing moments frozen in time by the lenses
              of our robotic companions. The convenience of this method provides
              unparalleled flexibility, enabling you to tailor your exploration
              based on your interests. Join us in unlocking the mysteries of
              Mars as we navigate through the cutting-edge technology and
              unparalleled exploration that has brought us face to face with the
              enigmatic Red Planet.
            </p>
          </div>
        </div>

        :

        <DisplayDetails roverInfo={roverInfo} />

      }

      <div className="ip">
        <div className="input-group mb-4 input_container">
          <input
            className="date_input form-control"
            type="date"
            name="date"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => setUserDate((prev) => e.target.value)}
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
