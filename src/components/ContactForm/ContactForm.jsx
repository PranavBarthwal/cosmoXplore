import React,{useState} from 'react';
import img from '../../assets/original-5fcdc62f8266e353ea97ca56731ad804.png';
import Styles from "./ContactForm.module.css"


function ContactForm() {

  const [contactInfo,setContactInfo]=useState({
    name:"",
    email:"",
    message:""
  })

  function handleSubmit(e){
    e.preventDefault();

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

    alert("Mail sent");

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
          <form>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputName" className="form-label text-light">Name</label> */}
              <input type="text" className={Styles["form-control"] + " " + "form-control"} id="exampleInputName" name='name' onChange={handleChange} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputEmail2" className="form-label text-light">Email address</label> */}
              <input type="email" className={Styles["form-control"] + " " + "form-control"} id="exampleInputEmail2" name='email' onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter your email" />
              <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="exampleInputMessage" className="form-label text-light">Message</label> */}
              <textarea className={Styles["form-control"] + " " + "form-control"} id="exampleInputMessage" rows="4" name='message' onChange={handleChange} placeholder="feel free to ask your queries!"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>send to space🚀</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
