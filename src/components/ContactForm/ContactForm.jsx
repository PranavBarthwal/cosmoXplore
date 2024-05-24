import React,{useState,useRef } from 'react';
import img from '../../assets/original-5fcdc62f8266e353ea97ca56731ad804.png';
import Styles from "./ContactForm.module.css"
import emailjs from '@emailjs/browser';


function ContactForm() {
  
  const [contactInfo,setContactInfo]=useState({
    name:"",
    email:"",
    message:""
  })

  const sendEmail = () => {
// importing environment variables from .env 
    const {VITE_SERVICE_ID,VITE_TEMPLATE_ID,VITE_PUBLIC_KEY}=import.meta.env;

    emailjs
      .send(VITE_SERVICE_ID,VITE_TEMPLATE_ID , contactInfo, {
        publicKey: VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };


  function handleSubmit(e){
    e.preventDefault();
    // checking for input
    if(contactInfo.name==="" || contactInfo.email==="" || contactInfo.message===""){
      alert("fill all required fields");
      return;
    }

    if(!contactInfo.email.match(
      "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    )){
      alert("Invalid email")
      return;
    }

    
    if(!(contactInfo.message.split(" ").length>=5)){
      alert("Message should contain atlest 5 words")
      return
    }
    sendEmail()
    alert("Mail sent");

    setContactInfo({
      name:"",
      email:"",
      message:""
    })
    
  }

  function handleChange(e){
    setContactInfo((prev)=>{
      return {...prev,[e.target.name]:e.target.value};
    })
  }

  return (
    <>
      <h1 align="center" className={Styles["section_title"]} id="contact">Contact Us</h1>
      <div className={Styles["contact-form"]}>
        <div className={Styles["left"]}>
          <img src={img} className={Styles["contact_img"]} alt="Contact Image" style={{ maxWidth: "100%" }} />
        </div>
        <div className={Styles["right"]}>
          <form >
            <div className="mb-3">
              <input type="text" autoComplete='off' className={Styles["form-control"] + " " + "form-control"} id="exampleInputName" name='name' value={contactInfo.name} onChange={handleChange} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <input type="email" autoComplete='off' className={Styles["form-control"] + " " + "form-control"} id="exampleInputEmail2" name='email' value={contactInfo.email} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter your email" />
              <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <textarea autoComplete='off' className={Styles["form-control"] + " " + "form-control"} id="exampleInputMessage" value={contactInfo.message} rows="4" name='message' onChange={handleChange} placeholder="feel free to ask your queries!"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Send to HQ 🚀</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
