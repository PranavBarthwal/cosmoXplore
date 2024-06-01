import React, { useEffect, useState } from 'react';
import logo from "../../assets/NASA_logo.svg";
import Styles from "./NasaProjects.module.css";
import { FaSearch } from "react-icons/fa";
import { FaAnglesRight, FaAnglesLeft, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { IoReloadOutline } from "react-icons/io5";
import ReadableStreamDecoder from "../../utils/ReadableStreamDecoder.js"
import Pagination from "../../utils/Pagination.js";


function TechNews() {

    const [showSearch, setShowSearch] = useState(false); // to show search bar.
    const [isLoading, setIsLoading] = useState(true); // to show loading state.
    const [search, setSearch] = useState(""); // to store search query.
    const [projects, setProjects] = useState([]); // to store projects.
    const [tempProject, setTempProjects] = useState([]); // to stote temporary projects.
    // const [paginationProjects, setPaginationProjects] = useState([]); // to store projects for pagination.
    const [currentPage, setCurrentPage] = useState(1); // to store pagination number.
    const [week, setWeek] = useState(1); // to set weeks for fetching data.
    const itemsPerPage = 10;

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


    // to paginate when new projects are fetched or currentPage is changed
    useEffect(() => {
        setTempProjects(Pagination.Paginate(projects, currentPage, itemsPerPage));
    }, [currentPage, projects])


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

    //breaking array into chunks
    function chunkArray(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    // fetches projects by the projects Id's.
    async function fetchProjects(projectsIds) {
        try {
            const chunkSize = 20; //It is the batch size 
            const projectChunks = chunkArray(projectsIds, chunkSize);
            const allProjects = [];
    
            for (const chunk of projectChunks) {
                const projectPromises = chunk.map(async (id) => { //using map for concurrent execution of data
                    let response = await fetch(`https://inplace-ghib.onrender.com/inplace`, {
                        method: "POST",
                        body: JSON.stringify({
                            url: `https://techport.nasa.gov/api/projects/${id}?api_key=${import.meta.env.VITE_API_KEY}`
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await ReadableStreamDecoder(response.body);
                    const { projectId, title, acronym, description, startDateString, endDateString, lastUpdated, statusDescription } = data.project;
                    return { projectId, title, acronym, description, startDateString, endDateString, lastUpdated, statusDescription };
                });
    
                const projects = await Promise.all(projectPromises); //waits for all promise to resolve
                allProjects.push(...projects);
    
                // Update state after processing each chunk
                setPaginationProjects((prev) => [...prev, ...projects]);
                setProjects((prev) => [...prev, ...projects]);
                localStorage.setItem("projects", JSON.stringify(allProjects));
            }
    
            setTimeout(() => setIsLoading(false), 2000);
    
        } catch (error) {
            setTimeout(() => setIsLoading(false), 2000);
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
            setTempProjects(
                projects.filter((item) => (
                    item.title.toLowerCase().search(search.toLowerCase()) > -1
                ))
            );
            setCurrentPage(1)
            Pagination.Paginate(tempProject, currentPage, itemsPerPage)
        } catch (error) {
            console.log(error.message);
        }
    }


    function handleChange(e) {
        setSearch(e.target.value);
    }
    
    useEffect(() => {
        const section = sec.current;
        const heading = head.current;
        const searchWrapper = sea.current;
        const projectsContainer = pro.current;
        const pagination = paginat.current;
        const loadMore = load.current;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add('reveal');
                    heading.classList.add('reveal-left');
                    searchWrapper.classList.add('reveal-left');
                    projectsContainer.classList.add('reveal-left');
                    pagination.classList.add('reveal-left');
                    loadMore.classList.add('reveal-left');
                }
            });
        }, observerOptions);

        observer.observe(section);
    }, []);

    return (
    <div id={Styles['container']} ref={sec}>
        <div id={Styles['container']}>

            <div id={Styles['section-1']}>

                <h1 id={Styles['heading']} ref={head}>
                    Latest Projects by
                    <img src={logo} />
                </h1>

                <div id={Styles['search-wrapper']} ref={sea}>

                    <input id={Styles['search']} className={showSearch ? Styles['open'] : Styles['close']} name='search' type='search' placeholder='Search here...' autoComplete='off' onChange={handleChange} />

                    {showSearch ?
                        <FaAnglesRight className={Styles['icons']} size={40} cursor={"pointer"} color='purple' onClick={() => setShowSearch(!showSearch)} />
                        :
                        <FaSearch className={Styles['icons']} size={40} cursor={"pointer"} color='purple' onClick={() => setShowSearch(!showSearch)} />
                    }

                </div>

            </div>

            <div id={Styles['projects']} ref={pro}>

                {tempProject.map((project, idx) => (

                    <ProjectCard key={idx} projectId={project.projectId} title={project.title} acronym={project.acronym} description={project.description} startDate={project.startDateString} endDate={project.endDateString} lastUpdated={project.lastUpdated} status={project.statusDescription} />

                ))}
            </div>
            {
                projects.length ?
                    <div id={Styles['page-btns']} ref={paginat}>
                        <FaAnglesLeft className={Styles['page-icons']} size={30} onClick={(e) => setCurrentPage(Pagination.StartPage(projects, currentPage, itemsPerPage))} />
                        <FaAngleLeft className={Styles['page-icons']} size={25} onClick={(e) => setCurrentPage(Pagination.PrevPage(projects, currentPage, itemsPerPage))} />
                        <span id={Styles['page-num']}>{currentPage}</span>
                        <FaAngleRight className={Styles['page-icons']} size={25} onClick={(e) => setCurrentPage(Pagination.NextPage(projects, currentPage, itemsPerPage))} />
                        <FaAnglesRight className={Styles['page-icons']} size={30} onClick={(e) => setCurrentPage(Pagination.LastPage(projects, currentPage, itemsPerPage))} />
                    </div> : ""
            }

            <button id={Styles['load_more']} onClick={handleLoadMore}  ref={load}>{isLoading ? "Loading..." : "Load More"} <IoReloadOutline className={isLoading ? Styles['reload'] : ''} /></button>

        </div>
    </div>
    )
}

export default TechNews
