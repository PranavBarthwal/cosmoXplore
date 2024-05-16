import React from 'react';

function Apod() {
  return (
    <>
      <h1 align="center" className="section_title section_title_mobile" id="apod">Astronomy Picture of The Day</h1>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" id="class_removal">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h2 id="title" className="display-7 fw-bold lh-1 text-light">APoD Title</h2><br />
            <p id="apod_info" className="lead">NASA's Astronomy Picture of the Day (APoD) showcases captivating celestial images accompanied by brief explanations. Each day, NASA features astronomical wonders, ranging from stunning nebulae and galaxies to snapshots of our solar system, providing a daily dose of cosmic beauty and scientific insight. APoD serves as a valuable resource for both astronomy enthusiasts and those seeking to explore the wonders of the universe.</p>
          </div>
          <div className="apod_img_container">
            <div className="img">
              <img src="./assets/64e4e4aabd98a600197c0ca3.webp" id="apod_img" className="apod_img" alt="APOD" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apod;
