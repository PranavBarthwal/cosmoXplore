import React from "react";
import img from "../../assets/feel the fear and do it anyway.png";
import Styles from "./DisplayDetails.module.css"


function DisplayDetails({ roverInfo, fun }) {
  return (
    <div id={Styles['container']}>

      <div id={Styles['rover-img']}>
        <img src={roverInfo.url ? roverInfo.url : img}
          alt="Rover" />
      </div>

      <div id={Styles['rover-info']}>

        <div className={Styles['rover-info-items']}><h4>Rover Name</h4>
          <p className="roverName">
            {roverInfo.roverName ? roverInfo.roverName : "...."}
          </p></div>

        <div className={Styles['rover-info-items']}><h4>Earth Date</h4>
          <p className="date">
            {roverInfo.earthDate ? roverInfo.earthDate : "...."}
          </p>
        </div>

        <div className={Styles['rover-info-items']}><h4>Launch Date</h4>
          <p className="launch">
            {roverInfo.launchDate ? roverInfo.launchDate : "...."}
          </p>
        </div>

        <div className={Styles['rover-info-items']}><h4>Land Date</h4>
          <p className="land">
            {roverInfo.landingDate ? roverInfo.landingDate : "...."}
          </p>
        </div>

        <div className={Styles['rover-info-items']}><h4>Camera</h4>
          <p className="camera">
            {roverInfo.cameraName ? roverInfo.cameraName : "...."}
          </p></div>

        <div className={Styles['rover-info-items']}><h4>Status</h4>
          <p className="status">
            {roverInfo.status ? roverInfo.status : "...."}
          </p></div>

      </div>
    </div>

  );
}

export default DisplayDetails;
