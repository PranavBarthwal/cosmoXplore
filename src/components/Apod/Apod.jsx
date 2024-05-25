import React, { useState, useEffect } from 'react';
import img from '../../assets/64e4e4aabd98a600197c0ca3.webp';
import Styles from "./Apod.module.css"


function Apod() {

  const [apodInfo, setApodInfo] = useState({
    url: "",
    explanation: "",
    title: "",
    date: "",
    copyright: ""
  })

  async function fetchAPOD() {

    try {

      let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`)

      response = await response.json();

      setApodInfo((prev) => {
        return { ...prev, url: response.url, explanation: response.explanation, title: response.title, date: response.date, copyright: response.copyright }
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchAPOD();
  }, [])


  return (

    <>
      <h1 align="center" className={Styles['section_title'] + " " + Styles['section_title_mobile']} id="apod">Astronomy Picture of The Day</h1 >

      <div className="container my-5">

        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" id="class_removal">

          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">

            <h2 id="title" className="display-7 fw-bold lh-1 text-light">{apodInfo.title ? apodInfo.title : "APoD Title"}</h2>

            <br />

            <p id="apod_info" className="lead">{apodInfo.explanation ? apodInfo.explanation : " NASA's Astronomy Picture of the Day (APoD) showcases captivating celestial images accompanied by brief explanations. Each day, NASA features astronomical wonders, ranging from stunning nebulae and galaxies to snapshots of our solar system, providing a daily dose of cosmic beauty and scientific insight. APoD serves as a valuable resource for both astronomy enthusiasts and those seeking to explore the wonders of the universe."}</p>

          </div>

          <div className={Styles["apod_img_container"]}>
            <div className={Styles["img"]}>
              <img src={apodInfo.url ? apodInfo.url : img} id={Styles["apod_img"]} className={Styles["apod_img"]} alt="APOD" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apod;
