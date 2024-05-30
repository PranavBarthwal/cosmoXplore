import React, { useEffect, useState } from 'react';
import logo from "../../assets/NASA_logo.svg";
import Styles from "./NasaProjects.module.css";
import { FaSearch } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { IoReloadOutline } from "react-icons/io5";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import ReadableStreamDecoder from "../../utils/ReadableStreamDecoder.js"



function TechNews() {

    const [showSearch, setShowSearch] = useState(false); // to show search bar.
    const [isLoading, setIsLoading] = useState(true); // to show loading state.
    const [search, setSearch] = useState(""); // to store search query.
    const [projects, setProjects] = useState([]); // to store projects.
    const [tempProject, setTempProjects] = useState(JSON.parse(localStorage.getItem("projects")) || []); // to stote temporary projects.
    const [paginationProjects, setPaginationProjects] = useState([]); // to store projects for pagination.
    const [page, setPage] = useState(1); // to store pagination number.
    const [week, setWeek] = useState(1); // to set weeks for fetching data.

    // Adding on scroll event listener for auto closing search bar.
    useEffect(() => {
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


    // to paginate when new projects are fetched or page is changed
    useEffect(() => {
        Pagination();
    }, [page, projects, paginationProjects])


    // debouncing the search query
    useEffect(() => {
        const ref = setTimeout(handleSearch, 1000);
        return () => clearTimeout(ref);
    }, [search])


    // returns date of n days ago
    function getStartDate(n = 0) {

        const today_date = new Date();
        const temp = new Date();

        temp.setDate((today_date.getDate() - (n * week)))

        var dd = String(temp.getDate()).padStart(2, '0');
        var mm = String(temp.getMonth() + 1).padStart(2, '0');
        var yyyy = temp.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    }


    // fetches projects Id's.
    async function fetchProjectsId() {

        try {

            let response = await fetch(`https://inplace-ghib.onrender.com/inplace`, {
                method: "POST",
                body:
                    JSON.stringify({
                        url: `https://techport.nasa.gov/api/projects?updatedSince=${getStartDate(7)}&api_key=${import.meta.env.VITE_API_KEY}`
                    }),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const data = await ReadableStreamDecoder(response.body);

            let projectsIds = [];

            data.projects.map((item, idx) => {
                projectsIds.push(item.projectId);
            })

            await fetchProjects(projectsIds);
        } catch (error) {
            console.log(error.message);
        }
        finally {
            setTimeout(() => setIsLoading(false), 2000)
        }
    }


    // fetches projects by the projects Id's.
    async function fetchProjects(projectsIds) {
        try {
            const temp = []
            for (const id of projectsIds) {
                let response = await fetch(`https://inplace-ghib.onrender.com/inplace`, {
                    method: "POST",
                    body:
                        JSON.stringify({
                            url: `https://techport.nasa.gov/api/projects/${id}?api_key=${import.meta.env.VITE_API_KEY}`
                        }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const data = await ReadableStreamDecoder(response.body);
                const { projectId, title, acronym, description, startDateString, endDateString, lastUpdated, statusDescription } = data.project;
                temp.push({ projectId, title, acronym, description, startDateString, endDateString, lastUpdated, statusDescription });
            }
            setPaginationProjects((prev) => [...temp]);
            setProjects((prev) => [...temp]);
            localStorage.setItem("projects", JSON.stringify(temp));
            setTimeout(() => setIsLoading(false), 2000)

        } catch (error) {
            setTimeout(() => setIsLoading(false), 2000)
            console.log(error.message);
        }
    }


    // handle load more projects.
    async function handleLoadMore() {
        setIsLoading((prev) => true);
        setWeek((prev) => prev + 1);
    }


    // search for projects
    function handleSearch() {
        try {
            setPaginationProjects(
                projects.filter((item) => (
                    item.title.toLowerCase().search(search.toLowerCase()) > -1
                ))
            );
            setPage(1)
        } catch (error) {
            console.log(error.message);
        }
    }


    function handleChange(e) {
        setSearch(e.target.value);
    }


    // next page
    function handleNextPage(e) {
        setPage((prev) => {
            if (prev < (Math.ceil(paginationProjects.length / 10)))
                return prev + 1;
            return prev;
        })
    }


    // go to last page
    function handleLastPage(e) {
        setPage(Math.ceil(paginationProjects.length / 10));
    }


    // previous page
    function handlePrevPage(e) {
        setPage((prev) => {
            if (prev > 1)
                return prev - 1;
            return prev;
        })
    }


    // go to first page
    function handleStartPage(e) {
        setPage(1);
    }


    // to make pages
    function Pagination() {
        setTempProjects((prev) => {
            const last_index = page * 10;
            const start_index = last_index - 10;
            return paginationProjects.slice(start_index, last_index);
        })
    }


    return (
        <div id={Styles['container']}>

            <div id={Styles['section-1']}>

                <h1 id={Styles['heading']} >
                    Latest Projects by
                    <img src={logo} />
                </h1>

                <div id={Styles['search-wrapper']}>

                    <input id={Styles['search']} className={showSearch ? Styles['open'] : Styles['close']} name='search' type='search' placeholder='Search here...' autoComplete='off' onChange={handleChange} />

                    {showSearch ?
                        <FaAnglesRight className={Styles['icons']} size={40} cursor={"pointer"} color='purple' onClick={() => setShowSearch(!showSearch)} />
                        :
                        <FaSearch className={Styles['icons']} size={40} cursor={"pointer"} color='purple' onClick={() => setShowSearch(!showSearch)} />
                    }

                </div>

            </div>

            <div id={Styles['projects']}>

                {tempProject.map((project, idx) => (

                    <ProjectCard key={idx} projectId={project.projectId} title={project.title} acronym={project.acronym} description={project.description} startDate={project.startDateString} endDate={project.endDateString} lastUpdated={project.lastUpdated} status={project.statusDescription} />

                ))}
            </div>
            {
                projects.length ?
                    <div id={Styles['page-btns']}>
                        <FaAnglesLeft className={Styles['page-icons']} size={30} onClick={handleStartPage} />
                        <FaAngleLeft className={Styles['page-icons']} size={25} onClick={handlePrevPage} />
                        <span id={Styles['page-num']}>{page}</span>
                        <FaAngleRight className={Styles['page-icons']} size={25} onClick={handleNextPage} />
                        <FaAnglesRight className={Styles['page-icons']} size={30} onClick={handleLastPage} />
                    </div> : ""
            }

            <button id={Styles['load_more']} onClick={handleLoadMore}>Load More <IoReloadOutline className={isLoading ? Styles['reload'] : ''} /></button>

        </div>
    )
}

export default TechNews