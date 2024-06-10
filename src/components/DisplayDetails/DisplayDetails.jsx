import React from "react";
import img from "../../assets/feel the fear and do it anyway.png";
import Styles from "./DisplayDetails.module.css"


function DisplayDetails({ roverInfo }) {
  return (
    <div id={Styles['container']}>

      <div id={Styles['rover-img']} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
        <img src={roverInfo.url ? roverInfo.url : img}
          alt="Rover" />
      </div>

      <div id={Styles['rover-info']}>

        <div className={Styles['rover-info-items']} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"><h4>Rover Name</h4>
          <p className="roverName">
            {roverInfo.roverName ? roverInfo.roverName : "...."}
          </p></div>

        <div className={Styles['rover-info-items']} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"><h4>Earth Date</h4>
          <p className="date">
            {roverInfo.earthDate ? roverInfo.earthDate : "...."}
          </p>
        </div>

        <div className={Styles['rover-info-items']} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"><h4>Launch Date</h4>
          <p className="launch">
            {roverInfo.launchDate ? roverInfo.launchDate : "...."}
          </p>
        </div>

        <div className={Styles['rover-info-items']} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"><h4>Land Date</h4>
          <p className="land">
            {roverInfo.landingDate ? roverInfo.landingDate : "...."}
          </p>
        </div>

        <div className={Styles['rover-info-items']} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"><h4>Camera</h4>
          <p className="camera">
            {roverInfo.cameraName ? roverInfo.cameraName : "...."}
          </p></div>

        <div className={Styles['rover-info-items']} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"><h4>Status</h4>
          <p className="status">
            {roverInfo.status ? roverInfo.status : "...."}
          </p></div>

      </div>
    </div>

  );
}

export default DisplayDetails;
