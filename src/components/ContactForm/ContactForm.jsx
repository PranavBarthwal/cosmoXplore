import React from 'react';
import img from '../../assets/original-5fcdc62f8266e353ea97ca56731ad804.png';
import Styles from "./ContactForm.module.css"


function ContactForm() {
  return (
    <>
      <h1 align="center" className={Styles["section_title"]} id="contact">Contact Us</h1>
      <div className={Styles["contact-form"]}>
        <div className={Styles["left"]}>
          <img src={img} className={Styles["contact_img"]} alt="Contact Image" style={{ maxWidth: "100%" }} />
        </div>
        <div className={Styles["right"]}>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label text-light">Name</label>
              <input type="text" className={Styles["form-control"] + " " + "form-control"} id="exampleInputName" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label text-light">Email address</label>
              <input type="email" className={Styles["form-control"] + " " + "form-control"} id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter your email" />
              <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputMessage" className="form-label text-light">Message</label>
              <textarea className={Styles["form-control"] + " " + "form-control"} id="exampleInputMessage" rows="4" placeholder="feel free to ask your queries!"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => alert('Mail has been sent successfully!')}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
