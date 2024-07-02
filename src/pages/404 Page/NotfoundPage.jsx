import './Notfound.css';
import { Link } from 'react-router-dom';
export default function NotfoundPage() {

  if (window.location.pathname === '/marsrover') {
    document.body.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(27, 0, 0, 1))";
  } else {
    document.body.style.backgroundImage = "linear-gradient(to left, rgb(10, 0, 73), rgb(0, 0, 0))";
  }

  return (
    <div className="error-page">
      <div className="container">
        <div className="error">
          <p className="p">4</p>
          <span className="dracula">
            <div className="con">
              <div className="hair"></div>
              <div className="hair-r"></div>
              <div className="head"></div>
              <div className="eye"></div>
              <div className="eye eye-r"></div>
              <div className="mouth"></div>
              <div className="blod"></div>
              <div className="blod blod2"></div>
            </div>
          </span>
          <p className="p">4</p>

          <div className="page-ms">
            <p className="page-msg">
              {" "}
              Oops, the page you're looking for Disappeared{" "}
            </p>
            <button className="go-back"><Link to="/" style={{ textDecoration: "none" }}>Go Back</Link></button>
          </div>
        </div>
      </div>

      <iframe
        style={{ width: 0, height: 0, border: 0 }}
        frameborder="no"
        allow="autoplay"
        src="https://instaud.io/_/2Vvu.mp3"
      ></iframe>
    </div>
  );
}
