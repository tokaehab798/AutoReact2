import React from 'react';
import "./Projects.css"

const Projects = () => {
    const srcsofprojects = [
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    ];
  
    const projectname = [
        "Aerated Static composting Device",
        "Line Following Robot",
        "Face Recogentation",
        "Off Road Adventure Robot",
        "Trashvision project",
        "Qvoiding obstacle",
    ];

    return (
        <section>
            <div className="container p-5">
                {/* project Title */}
                <h2 className="text-center mb-3">Projects</h2>

                {/* Underline */}
                <div className="underline mb-lg-5 bg-success"></div>

                <div className="row justify-content-center mb-5">
                    {/* Project cards */}
                    {srcsofprojects.map((src, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="member">
                                {/* Image */}
                                <div className="d-flex justify-content-center">
                                    <img src={src} className="img-fluid img-thumbnail" alt={"Image " + (index + 1)} style={{ height: '200px' }} />
                                </div>
                                {/* Details */}
                                <div>
                                    <h5 className="mt-3" style={{ textAlign: 'center' }}>{projectname[index]}</h5>
                                    <a href="/project" className="text-decoration-none d-flex justify-content-center align-items-center text-success mb-3">
                                        <p className="mb-0">See More Details</p>
                                        <i className="fa fa-arrow-right ms-2" style={{ marginTop: '5px' }}></i>
                                    </a>
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
