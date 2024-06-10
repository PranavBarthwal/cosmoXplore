import React, { useEffect, useState } from "react";
import img from "../../assets/mars.png";
import DisplayDetails from "../../components/DisplayDetails/DisplayDetails.jsx";
import { toastify } from "../../components/Toast/Toast.jsx";
import ReadableStreamDecoder from './../../utils/ReadableStreamDecoder';
import Styles from "./MarsRover.module.css"
import Curiosity from "../../components/3D_Rovers/Curiosity.jsx"
import Perseverance from "../../components/3D_Rovers/Perseverance.jsx"
import SpritOpp from "../../components/3D_Rovers/SpritOpp.jsx";

function MarsRover() {

    const [userDate, setUserDate] = useState("");
    const [roverInfo, setRoverInfo] = useState({
        url: "",
        earthDate: "",
        roverName: "",
        cameraName: "",
        launchDate: "",
        landingDate: "",
        status: ""
    })
    const [maxDate, setMaxDate] = useState("");

    useEffect(() => {
        getMaxDate();
    }, [])

    useEffect(() => {
        if (userDate !== "")
            fetchImage()
    }, [maxDate])

    async function fetchImage(e) {
        try {

            e?.preventDefault();

            if (userDate == "") {
                toastify("Enter Date", false)
                return
            }

            let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userDate}&api_key=${import.meta.env.VITE_API_KEY}`;

            let response = await fetch(url);

            response = await response.json();

            if (response.photos.length === 0) {
                toastify("No images for selected date", false)
                setRoverInfo({
                    url: "",
                    earthDate: "",
                    roverName: "",
                    cameraName: "",
                    launchDate: "",
                    landingDate: "",
                    status: ""
                })
                return
            }

            const image_from_rover = response.photos[0];

            setRoverInfo((prev) => {
                return { ...prev, url: image_from_rover.img_src, earthDate: image_from_rover.earth_date, roverName: image_from_rover.rover.name, cameraName: image_from_rover.camera.full_name, launchDate: image_from_rover.rover.launch_date, landingDate: image_from_rover.rover.landing_date, status: image_from_rover.rover.status };
            })

        } catch (error) {
            console.log(error.message);
        }
    }


    async function getMaxDate() {

        try {
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${import.meta.env.VITE_API_KEY}`)

            const data = await ReadableStreamDecoder(response.body);

            setMaxDate(data.latest_photos[0].rover.max_date);
            setUserDate(data.latest_photos[0].rover.max_date);

        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div id={Styles['container']}>
            <h1 className={Styles["section_title"] + " section_title_mobile"} id="mars">Mars Rover Imagery</h1>
            <br />

            <section id={Styles['section-1']}>
                <div >
                    <img src={img} alt="Mars" />
                </div>
                <p >
                    Welcome to an extraordinary adventure into the Martian landscape,
                    where we invite you to explore the wonders of the Red Planet through
                    the lens of various rovers that have traversed its surface. Our
                    journey takes us deep into the photographic archives, a treasure
                    trove of captivating images captured by these robotic explorers.
                    Each rover, armed with sophisticated cameras, has documented the
                    Martian terrain, unveiling its mysteries one snapshot at a time.
                    But how do you, the
                    explorer, access this vast collection? Fear not, for we present a
                    user-friendly approach that allows you to effortlessly navigate
                    through the visual wonders of Mars. By simply entering the Earth
                    date corresponding to a specific photo, you unlock a portal to the
                    Red Planet's past, witnessing moments frozen in time by the lenses
                    of our robotic companions.
                </p>
            </section>

            <hr />

            <section id={Styles['section-2']}>
                <h1 className={Styles['section_title']}>Mars Rovers</h1>
                <div id={Styles['rover-wrapper']}>

                    <div className={Styles['rover-card']}>
                        <h1><u>Curiosity</u></h1>
                        <div className={Styles['rover']}>
                            <div className={Styles['rover-left']}>
                                <div className={Styles['rover-model']}>
                                    <Curiosity />
                                </div>
                                <div className={Styles['rover-launch-info']}>
                                    <h3>Launch Date: 26 November, 2011 </h3>
                                    <h3>Landing Date: 06 August, 2012</h3>
                                </div>
                            </div>
                            <p>Launched in 2011, NASA's Curiosity rover is a Mars Science Laboratory mission currently exploring Gale Crater.Its primary mission is to determine past Martian habitability and search for potential biosignatures.  Curiosity transmits data and imagery back to Earth, furthering our understanding of the Red Planet's geology and past environment.<br /><a href="https://en.wikipedia.org/wiki/Curiosity_(rover)" target="_blank" >learn more here</a>👈</p>
                        </div>
                    </div>

                    <div className={Styles['rover-card']}>
                        <h1><u>Perseverance</u></h1>
                        <div className={Styles['rover']}>
                            <div className={Styles['rover-left']}>
                                <div className={Styles['rover-model']}>
                                    <Perseverance />
                                </div>
                                <div className={Styles['rover-launch-info']}>
                                    <h3>Launch Date: 30 July, 2020</h3>
                                    <h3>Landing Date: 18 February, 2021</h3>
                                </div>
                            </div>
                            <p>The Perseverance rover, a robotic astrobiology vehicle launched by NASA in 2020, is currently investigating Mars' Jezero Crater.Perseverance's primary mission is to collect rock samples and analyze the Martian geological makeup, all while searching for potential biosignatures indicative of past microbial life.<br /><a href="https://en.wikipedia.org/wiki/Perseverance_(rover)" target="_blank" >learn more here</a>👈</p>
                        </div>
                    </div>

                    <div className={Styles['rover-card']}>
                        <h1><u>Sprit & Opportunity</u></h1>
                        <div className={Styles['rover']}>
                            <div className={Styles['rover-left']}>
                                <div className={Styles['rover-model']}>
                                    <SpritOpp />
                                </div>
                                <div className={Styles['rover-launch-info']}>
                                    <h3>Launch Date: 07 July, 2003</h3>
                                    <h3>Landing Date: 03 January, 2004</h3>
                                </div>
                            </div>
                            <p>NASA's Mars Exploration Rover (MER) mission, launched in 2003, deployed twin rovers, Spirit and Opportunity, to investigate the Martian surface.  These rovers, designed for a 90-day mission, far exceeded expectations. Spirit explored Gusev Crater, searching for past water activity, while Opportunity roamed Meridiani Planum, analyzing mineral deposits.<br /><a href="https://en.wikipedia.org/wiki/Mars_Exploration_Rover" target="_blank" >learn more here</a>👈</p>
                        </div>
                    </div>

                </div>
            </section>

            <hr />

            <section id={Styles['section-3']}>
                <h1 className={Styles['section_title']}>Mars Images</h1>

                <div id={Styles['calender']}>
                    <input
                        className="date_input form-control"
                        type="date"
                        name="date"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        min="2015-06-03"
                        max={maxDate}
                        value={userDate}
                        onChange={(e) => setUserDate((prev) => e.target.value)}
                    />
                    <button
                        className="btn btn-primary mars_button"
                        type="button"
                        id="button-addon2"
                        onClick={fetchImage}
                    >
                        Enter
                    </button>
                </div>

                <DisplayDetails roverInfo={roverInfo} />
            </section>

        </div>
    );
}

export default MarsRover;
