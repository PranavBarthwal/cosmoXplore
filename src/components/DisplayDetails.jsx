import React from "react";
import img from "../assets/feel the fear and do it anyway.png";

function DisplayDetails() {
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
  return (
    <div className="rover_display">
      <div className="inner_conatiner">
        <div className="image_div">
          <img
            id="roverImg"
            src={img}
            className="rover_popup_image_mobile"
            alt="Rover"
          />
        </div>

        <div className="info_container">
          <div className="info1 info-gen">
            <div className="row">
              <div className="card">
                <h4>Earth Date</h4>
                <p className="date">....</p>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <h4>Rover Name</h4>
                <p className="roverName">....</p>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <h4>Camera</h4>
                <p className="camera">....</p>
              </div>
            </div>
          </div>

          <div className="info2 info-gen">
            <div className="row">
              <div className="card">
                <h4>Launch Date</h4>
                <p className="launch">....</p>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <h4>Land Date</h4>
                <p className="land">....</p>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <h4>Status</h4>
                <p className="status">....</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="input-group mb-4 input_container">
        <input
          className="date_input form-control"
          type="text"
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
  );
}

export default DisplayDetails;
