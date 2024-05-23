import React from "react";
import img from "../../assets/feel the fear and do it anyway.png";
import '../../App.css'

function DisplayDetails() {
  return (
    <>
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


      </div>
    </>
  );
}

export default DisplayDetails;
