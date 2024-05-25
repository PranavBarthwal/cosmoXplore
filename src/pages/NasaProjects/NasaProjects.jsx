import React, { useEffect, useState } from 'react'
import logo from "../../assets/NASA_logo.svg"
import Styles from "./NasaProjects.module.css"
import { FaSearch } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { IoReloadOutline } from "react-icons/io5";



function TechNews() {

    const [showSearch, setShowSearch] = useState(false); // to show search bar
    const [search, setSearch] = useState("") // to store search query
    const [isLoading, setIsLoading] = useState(false); // to show loading state
    const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("projects")) || []); // to store projects
    const [week, setWeek] = useState(1); // to set weeks for fetching data

    const today_date = new Date();

    // Adding on scroll event listener for auto closing search bar.
    useEffect(() => {
        let position = window.scrollY;
        window.onscroll = () => {
            setTimeout(() => {
                setShowSearch((prev) => false)
            }, 200)
        }
    }, [showSearch])

    // to fetch projects when component is loaded.
    useEffect(() => {
        fetchProjectsId();
    }, [week])

    // returns date of n days ago
    function getStartDate(n = 0) {

        const today_date = new Date();
        const temp = new Date();

        temp.setDate((today_date.getDate() - (n * week)))

        var dd = String(temp.getDate()).padStart(2, '0');
        var mm = String(temp.getMonth() + 1).padStart(2, '0');
        var yyyy = temp.getFullYear();
        console.log(`${yyyy}-${mm}-${dd}`);
        return `${yyyy}-${mm}-${dd}`;

    }

    // decodes stream of data chunks.
    async function decodeData(body) {
        try {
            const reader = body.pipeThrough(new TextDecoderStream("utf-8")).getReader();

            let json_temp = "";

            while (true) {
                const { value, done } = await reader.read();
                json_temp = json_temp + (value ? value : "");
                if (done) break;
            }

            const data = JSON.parse(json_temp);
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    // fetches projects Id's.
    async function fetchProjectsId() {

        try {

            let response = await fetch(`https://techport.nasa.gov/api/projects?updatedSince=${getStartDate(7)}&api_key=${import.meta.env.VITE_API_KEY}`)

            const data = await decodeData(response.body);

            let projectsIds = [];

            data.projects.map((item, idx) => {
                projectsIds.push(item.projectId);
            })

            await fetchProjects(projectsIds);

        } catch (error) {
            console.log(error.message);
        }
    }

    // fetches projects by the projects Id's.
    async function fetchProjects(projectsIds) {
        try {
            const temp = []
            Promise.all(projectsIds.map(async (id, index) => {
                const response = await fetch(`https://techport.nasa.gov/api/projects/${id}`)
                const data = await decodeData(response.body);
                const { projectId, title, acronym, description, startDateString, endDateString, lastUpdated, statusDescription } = data.project;
                temp.push({ projectId, title, acronym, description, startDateString, endDateString, lastUpdated, statusDescription });
            })).then(() => {
            }).then(() => {
                setProjects((prev) => [...prev, ...temp]);
            }).then(() => {
                localStorage.setItem("projects", JSON.stringify(temp));
            })

        } catch (error) {
            console.log(error.message);
        }
    }

    // handle load more projects.
    function handleLoadMore() {
        setIsLoading((prev) => true);
        setWeek((prev) => prev + 1);
        setTimeout(() => setIsLoading(false), 5000)
    }

    // search for projects
    function handleChange(e) {
        setSearch(e.target.value);
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

                {projects.map((project, idx) => (

                    <ProjectCard key={idx} projectId={project.projectId} title={project.title} acronym={project.acronym} description={project.description} startDate={project.startDateString} endDate={project.endDateString} lastUpdated={project.lastUpdated} status={project.statusDescription} />

                ))}
            </div>

            <button id={Styles['load_more']} onClick={handleLoadMore}>Load More <IoReloadOutline className={isLoading ? Styles['reload'] : ''} /></button>

        </div>
    )
}

export default TechNews