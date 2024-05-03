import React from 'react';
import  "./Project.css"

const Project = () => {
    const srcsofproject = [
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    ];

    const srcsofprojectteam = [
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    ];

    const srcsofteamname = [
        "Ziad Algendi",
        "Abdul-Rahman Al-Jammal",
        "Asmaa Elsayed"
    ];

    return (
        <section className="container">
            {/* Go Back Link */}
            <div className="go-back-container" style={{ marginLeft: "20px" }}>
                <a className="go-back-link" onClick={() => window.history.back()}>
                    <i className="fas fa-arrow-left"></i> Go Back
                </a>
            </div>

            {/* Competition Section */}
            <div className="p-5">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Image Section */}
                        <div className="col-md-4">
                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="img-fluid" alt="Competition Image" style={{ width: '450px' }} />
                        </div>
                        {/* Content Section */}
                        <div className="col-md-8 d-flex align-items-start">
                            <div>
                                {/* Title */}
                                <h2>Automated Fruit Harvesting and Classification System using ML</h2>
                                {/* Paragraph */}
                                <p>Embarked on a pioneering project fusing machine learning and robotics to automate fruit classification and sorting. Utilizing a remote ML model, fruits are accurately classified, triggering signals to a robotic arm for seamless picking and sorting into designated bowls. This interdisciplinary endeavor not only pushes the boundaries of AI and robotics but also offers valuable hands-on experience for all participants. Through this innovative synergy of technologies, we've not only accomplished efficient fruit sorting but also gained profound insights into the intersection of machine learning and robotics, paving the way for future advancements in automation and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Picture Section */}
            <div className="p-3">
                <div className="container">
                    <div className="row justify-content-center mb-5 container align-items-center">
                        {srcsofproject.map((src, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="member">
                                    {/* Image */}
                                    <div className="d-flex justify-content-center">
                                        <img src={src} className="img-fluid" alt="Project Image" style={{ width: '300px' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Members Section */}
            <div className="pb-5">
                <div className="container p-5">
                    {/* Team Members Title */}
                    <h2 className="mb-3">Project Team Members</h2>
                    {/* Underline */}
                    <div className="underline mb-lg-5 bg-success"></div>

                    {/* Team Members */}
                    <div className="d-flex justify-content-center flex-wrap">
                        {srcsofprojectteam.map((src, index) => (
                            <div className="text-center mx-5 mb-3" key={index}>
                                {/* Team Member Image */}
                                <img src={src} alt={"Person " + (index + 1)} className="rounded-circle" style={{ width: '170px', height: '170px' }} />
                                {/* Team Member Name */}
                                <div className="mt-2">
                                    <h4>{srcsofteamname[index]}</h4>
                                    {/* Team Member Role */}
                                    <p>Student</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
