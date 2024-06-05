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

    const [showImages, setShowImages] = useState(false);
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

    async function displayRover(e) {
        try {

            e.preventDefault();

            if (userDate == "") {
                toastify("Enter Date", false)
                return
            }

            let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userDate}&api_key=${import.meta.env.VITE_API_KEY}`;

            let response = await fetch(url);

            response = await response.json();

            if (response.photos.length === 0) {
                toastify("No images for selected date", false)
                setShowImages(false)
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

            setShowImages(true)

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
            <h1 className="section_title section_title_mobile" id="mars">Mars Rover Imagery</h1>
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
                    This repository is a testament to the marvels of technology and
                    the spirit of scientific curiosity that drives
                    humanity to push the boundaries of exploration. But how do you, the
                    explorer, access this vast collection? Fear not, for we present a
                    user-friendly approach that allows you to effortlessly navigate
                    through the visual wonders of Mars. By simply entering the Earth
                    date corresponding to a specific photo, you unlock a portal to the
                    Red Planet's past, witnessing moments frozen in time by the lenses
                    of our robotic companions.
                </p>
            </section>



            <section id={Styles['section-2']}>
                <h1>Rovers on Mars</h1>
                <div>
                    <div className={Styles['rover-wrapper']}><Curiosity /></div>
                    <div className={Styles['rover-wrapper']}><Perseverance /></div>
                    <div className={Styles['rover-wrapper']}><SpritOpp /></div>
                </div>
            </section>



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
                    onClick={displayRover}
                >
                    Enter
                </button>
            </div>

            {showImages && (<DisplayDetails roverInfo={roverInfo} fun={setShowImages} />)}

        </div>
    );
}

export default MarsRover;
