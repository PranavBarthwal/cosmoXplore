import React from 'react';

function Hero() {
  return (
    <div className="container col-xxl-9 px-3 py-5 override-display">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="./assets/A letter tech logo.png" className="d-block mx-lg-auto img-fluid hero_img" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-2 fw-bold text-light">Let's embark on a Cosmic <span className="highlight">X</span><span className="auto-typed"></span></h1>
          <p className="lead text-light">Welcome to CosmoXplore, where the celestial canvas unfolds its mysteries before your eyes. Immerse yourself in a cosmic odyssey, as we harness the power of NASA's API to bring you a symphony of space resources. From breathtaking images to cutting-edge astronomical data, embark on a journey that transcends the limits of earthly imagination.</p>
          <div className="d-grid gap-5 d-md-flex justify-content-md-start pt-2">
            <a href="#apod">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Explore</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
