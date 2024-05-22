import React from 'react';
import img from '../assets/original-5fcdc62f8266e353ea97ca56731ad804.png';


function ContactForm() {
  return (
    <>
      <h1 align="center" className="section_title" id="contact">Contact Us</h1>
      <div className="contact-form">
        <div className="left">
          <img src={img} className="contact_img" alt="Contact Image" style={{ maxWidth: "100%" }} />
        </div>
        <div className="right">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label text-light">Name</label>
              <input type="text" className="form-control" id="exampleInputName" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label text-light">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter your email" />
              <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputMessage" className="form-label text-light">Message</label>
              <textarea className="form-control" id="exampleInputMessage" rows="4" placeholder="feel free to ask your queries!"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => alert('Mail has been sent successfully!')}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
