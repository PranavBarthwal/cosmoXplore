import React, { useEffect, useState } from 'react'
import Styles from "./About.module.css"
import vision from "../../assets/vision.svg"
import method from "../../assets/method.svg"
import { FaAnglesRight, FaAnglesLeft, FaAngleLeft, FaAngleRight, FaGithub, FaLinkedin } from "react-icons/fa6";
import Pagination from "../../utils/Pagination.js"




function About() {

    const FOUNDER_NAME = "PranavBarthwal"
    const FOUNDER_LINKEDIN_URL = "https://www.linkedin.com/in/pranavbarthwal03/"
    const CARDS_PER_PAGE = 8;
    const repoName = "cosmoXplore";

    const [contributors, setContributors] = useState([]);
    const [founder, setFounder] = useState({});
    const [currentPage, setCurrentPage] = useState(1); // to store pagination number.
    const [pageinatedContributors, setPageinatedContributors] = useState([]);


    useEffect(() => {
        fetchContributors()
    }, [])

    useEffect(() => {
        setPageinatedContributors(Pagination.Paginate(contributors, currentPage, CARDS_PER_PAGE));
    }, [contributors, currentPage])

    async function fetchContributors() {
        try {

            const response = await fetch(`https://api.github.com/repos/${FOUNDER_NAME}/${repoName}/contributors`)

            const data = await response.json();

            setContributors((prev) => {
                return data.filter((user, idx) => user.login != FOUNDER_NAME);
            })

            setFounder(data.find((user) => user.login == FOUNDER_NAME));

        } catch (error) {
            console.log(error.message);
        }
    }

    if (window.location.pathname === '/marsrover') {
        document.body.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(27, 0, 0, 1))";
      } else {
        document.body.style.backgroundImage = "linear-gradient(to left, rgb(10, 0, 73), rgb(0, 0, 0))";
    }      

    return (
        <div id={Styles.container}>

            <section id={Styles.section_1}>
                <h1>About CosmoXplore</h1>
                <p><b>
                    “CosmoXplore is your portal to the universe's wonders, Making space exploration accessible and exciting for everyone.”
                </b></p>
            </section>

            <section id={Styles.section_2}>
                <h1><u>Our Vision </u></h1>
                <div>
                    <p>Explore the cosmos with CosmoXplore and stay informed about the innovations driving humanity's journey into the final frontier. Join us in discovering the beauty and mysteries of space, one photo and breakthrough at a time.As an open source organization, we are committed to transparency, collaboration, and community-driven development.</p>
                    <img src={vision} width='400px' height='400px' />
                </div>
            </section>

            <section id={Styles.section_3}>
                <h1><u>Our Methods</u></h1>
                <div>
                    <img src={method} width='400px' height='400px' />
                    <p>Our platform brings you stunning Astronomy Picture of the Day (APOD) images, fascinating photos of Mars, and updates on the latest technological breakthroughs at NASA. Utilizing NASA's open API, we deliver a seamless and engaging experience for space enthusiasts and curious minds alike.</p>
                </div>
            </section>

            <section id={Styles.section_4}>

                <div id={Styles.founder}>
                    <h1><u>Our Founder</u></h1>
                    <div>
                        <img src={founder.avatar_url} />
                        <h3>{founder.login}</h3>
                        <div id={Styles.social}>
                            <a href={founder.html_url} target='_blank'><FaGithub size={30} /></a>
                            <a href={FOUNDER_LINKEDIN_URL} target='_blank'><FaLinkedin size={30} /></a>
                        </div>
                    </div>
                </div>

                <div id={Styles.contributors}>
                    <h2><u>Our Contributors</u></h2>

                    <div id={Styles.cards}>
                        {
                            pageinatedContributors.map((user, idx) => (
                                <div key={idx} className={Styles.card}>
                                    <img src={user.avatar_url} />
                                    <h3>{user.login}</h3>
                                    <div id={Styles.social}>
                                        <a href={user.html_url} target='_blank'><FaGithub size={30} /></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div id={Styles['page-btns']}>
                        <FaAnglesLeft className={Styles['page-icons']} size={30} onClick={() => setCurrentPage(Pagination.StartPage(contributors, currentPage, CARDS_PER_PAGE))} />
                        <FaAngleLeft className={Styles['page-icons']} size={25} onClick={() => setCurrentPage(Pagination.PrevPage(contributors, currentPage, CARDS_PER_PAGE))} />

                        <span id={Styles['page-num']}>{currentPage}</span>

                        <FaAngleRight className={Styles['page-icons']} size={25} onClick={() => setCurrentPage(Pagination.NextPage(contributors, currentPage, CARDS_PER_PAGE))} />
                        <FaAnglesRight className={Styles['page-icons']} size={30} onClick={() => setCurrentPage(Pagination.LastPage(contributors, currentPage, CARDS_PER_PAGE))} />
                    </div>
                </div>

            </section>


        </div>
    )
}

export default About