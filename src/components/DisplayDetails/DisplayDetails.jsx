import React from "react";
import img from "../../assets/feel the fear and do it anyway.png";
import '../../App.css'

function DisplayDetails({ roverInfo }) {

  return (
    <>
      <div className="rover_display">
        <div className="inner_container">
          <div className="image_div">

            <img
              id="roverImg"
              src={roverInfo.url ? roverInfo.url : img}
              className="rover_popup_image_mobile"
              alt="Rover"
            />
          </div>

          <div className="info_container">
            <div className="info1 info-gen">
              <div className="row">
                <div className="card">
                  <h4>Earth Date</h4>
                  <p className="date">{roverInfo.earthDate ? roverInfo.earthDate : "...."}</p>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <h4>Rover Name</h4>
                  <p className="roverName">{roverInfo.roverName ? roverInfo.roverName : "...."}</p>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <h4>Camera</h4>
                  <p className="camera">{roverInfo.cameraName ? roverInfo.cameraName : "...."}</p>
                </div>
              </div>
            </div>

            <div className="info2 info-gen">
              <div className="row">
                <div className="card">
                  <h4>Launch Date</h4>
                  <p className="launch">{roverInfo.launchDate ? roverInfo.launchDate : "...."}</p>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <h4>Land Date</h4>
                  <p className="land">{roverInfo.landingDate ? roverInfo.landingDate : "...."}</p>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <h4>Status</h4>
                  <p className="status">{roverInfo.status ? roverInfo.status : "...."}</p>
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
