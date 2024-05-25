import React, { useEffect, useState } from 'react'
import logo from "../../assets/NASA_logo.svg"
import Styles from "./NasaProjects.module.css"
import { FaSearch } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { IoReloadOutline } from "react-icons/io5";



function TechNews() {

    const [showSearch, setShowSearch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetch, setIsFetch] = useState(true);
    const [projectIds, setProjectIds] = useState([]);

    const today_date = new Date();


    useEffect(() => {
        let position = window.scrollY;
        window.onscroll = () => {
            setTimeout(() => {
                setShowSearch((prev) => false)
            }, 200)
        }
    }, [showSearch])

    useEffect(() => {
        fetchData();
    }, [])


    async function fetchData() {

        try {
            // let temp = [];

            console.log("call");

            let response = await fetch(`https://techport.nasa.gov/api/projects?updatedSince=2024-05-01&api_key=${import.meta.env.VITE_API_KEY}`)

            const reader = response.body.pipeThrough(new TextDecoderStream("utf-8")).getReader();

            let temp = "";

            while (true) {
                const { value, done } = await reader.read();
                temp = temp + (value ? value : "");
                if (done) break;
            }

            console.log(temp);

        } catch (error) {
            console.log(error);
        }
    }


    function handleLoadMore() {
        setIsLoading((prev) => true);
        console.log(isLoading);
        setTimeout(() => setIsLoading(false), 5000)
    }


    return (
        <div id={Styles['container']}>

            <div id={Styles['section-1']}>

                <h1 id={Styles['heading']} >
                    Latest Projects by
                    <img src={logo} />
                </h1>

                <div id={Styles['search-wrapper']}>

                    <input id={Styles['search']} className={showSearch ? Styles['open'] : Styles['close']} name='search' type='search' placeholder='Search here...' autoComplete='off' />

                    {showSearch ?
                        <FaAnglesRight className={Styles['icons']} size={40} cursor={"pointer"} color='purple' onClick={() => setShowSearch(!showSearch)} />
                        :
                        <FaSearch className={Styles['icons']} size={40} cursor={"pointer"} color='purple' onClick={() => setShowSearch(!showSearch)} />
                    }

                </div>

            </div>

            <div id={Styles['projects']}>

                <ProjectCard projectId="117090" title="Urban Air Mobility (UAM) Operational Fleet Noise Assessment
" acronym="AAVP26" description="<p>In order to address the need for a documented methodology for generating noise assessments of fleet operations of UAM eVTOL aircraft concepts, NASA will deliver validated tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.</p> " startDate="Mar 2020" endDate="Jun 2024" lastUpdated="2024-5-23
" status="Active" />
                <ProjectCard projectId="117090" title="Urban Air Mobility (UAM) Operational Fleet Noise Assessment
" acronym="AAVP26" description="<p>In order to address the need for a documented methodology for generating noise assessments of fleet operations of UAM eVTOL aircraft concepts, </p> " startDate="Mar 2020" endDate="Jun 2024" lastUpdated="2024-5-23
" status="Active" />
                <ProjectCard projectId="117090" title="Urban Air Mobility (UAM) Operational Fleet Noise Assessment
" acronym="AAVP26" description="<p>In order to address the need for a documented methodology for generating noise assessments of fleet operations of UAM eVTOL aircraft concepts, NASA will deliver validated tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.</p> " startDate="Mar 2020" endDate="Jun 2024" lastUpdated="2024-5-23
" status="Active" />
                <ProjectCard projectId="117090" title="Urban Air Mobility (UAM) Operational Fleet Noise Assessment
" acronym="AAVP26" description="<p>In order to address the need for a documented methodology for generating noise assessments of fleet operations of UAM eVTOL aircraft concepts, NASA will deliver validated tools and tool chain documentation at TRL&#61;5, document best practices for fleet noise modeling, and demonstrate fleet noise assessments of representative UAM operations.</p> " startDate="Mar 2020" endDate="Jun 2024" lastUpdated="2024-5-23
" status="Active" />

            </div>

            <button id={Styles['load_more']} onClick={handleLoadMore}>Load More <IoReloadOutline className={isLoading ? Styles['reload'] : ''} /></button>

        </div>
    )
}

export default TechNews