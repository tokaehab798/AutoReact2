import React, { useCallback, useEffect, useState } from "react";
import "./Projects.css";
import { getAllProjects } from "../../services/projects";
import { imageLoadingFailedHandler } from "../../helpers/image";
import { PATHS } from "../../constants/paths";
import { Link } from 'react-router-dom';



const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);

    const fetchAllProjects = useCallback(async () => {
        try {
            const response = await getAllProjects();
            const { data } = response;
            setAllProjects(data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchAllProjects();
    }, [fetchAllProjects]);

    return (
        <section>
            <div className="container p-5">
                {/* project Title */}
                <h2 className="text-center mb-3">Projects</h2>

                {/* Underline */}
                <div className="underline mb-lg-5 bg-success"></div>

                <div className="row justify-content-center mb-5">
                    {/* Project cards */}
                    {allProjects.map((project) => (
                        <div className="col-md-4" key={project._id}>
                            <div className="member">
                                {/* Image */}
                                <div className="d-flex justify-content-center">
                                    <img src={project.mainPic} className="img-fluid img-thumbnail" alt={project.title} style={{ height: '200px' }} onError={imageLoadingFailedHandler} />
                                </div>
                                {/* Details */}
                                <div>
                                    <h5 className="mt-3" style={{ textAlign: 'center' }}>{project.title}</h5>
                                    
                                <Link to={PATHS.project(project._id)} className="text-decoration-none d-flex justify-content-center align-items-center text-success mb-3">
                                    <p className="mb-0">See More Details</p>
                                    <i className="fa fa-arrow-right ms-2" style={{ marginTop: '5px' }}></i>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;