import React from 'react';

function DisplayDetails() {
  return (
    <div className="rover_display">
      <div className="inner_conatiner">
        <div className="image_div">
          <img id="roverImg" src="./assets/feel the fear and do it anyway.png" className="rover_popup_image_mobile" alt="Rover" />
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
        <input className="date_input form-control" type="text" placeholder="Enter the date for retrieving Mars Rover Images. (YYYY-MM-DD)" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-primary mars_button" type="button" id="button-addon2" onClick={displayRover}>Enter</button>
      </div>
    </div>
  );
}

export default DisplayDetails;
