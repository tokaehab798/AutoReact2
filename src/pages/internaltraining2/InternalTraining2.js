import React from 'react';
import "./InternalTraining2.css"

function InternalTraining2() {
    return (
        <div>
            {/* Image and Content Section */}
            <div className="p-5">
            <div className="go-back-container" style={{ marginLeft: "20px" }}>
                <a className="go-back-link" onClick={() => window.history.back()}>
                    <i className="fas fa-arrow-left"></i> Go Back
                </a>
            </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Image Section */}
                        <div className="col-md-5">
                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="img-fluid rounded-1" alt="Competition Image" style={{ width: '450px' }} />
                        </div>
                        {/* Content Section */}
                        <div className="col-md-5 d-flex align-items-center">
                            <div>
                                {/* Title */}
                                <h2>Embedded System</h2>
                                {/* Paragraph */}
                                <p>Lorem ipsum dolorero nam temporibus fugit odio, sint amet mollitia unde itaque cupiditate voluptates nihil architecto aliquid! Natus animi quaerat eius quasi qui mollitia tempore numquam totam libero sit! Error facilis facere, quo adipisci alias et similique voluptatem? Voluptates, obcaecati! Sit labore animi officiis fugiat odit maxime distinctio. Facere atque, hic ad nam officiis quaerat eos tempore unde culpa a repudiandae quibusdam, at, accusantium maiores et iste doloremque! </p>
                                {/* Line containing start date, end date, and link */}
                                <div>
                                    <p className="mb-0"><strong>Start from:</strong> <span className="text-secondary"> 20 Jan</span></p>
                                    <div className="d-flex justify-content-between ">
                                        <p className="me-5"><strong>Period:</strong> <span className="text-secondary"> 2 weeks</span></p>
                                        <button className="btn btn-success ">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What you'll Learn Section */}
            <div className="bg-light">
                <div className="container p-5 ">
                    <h4 className="text-center mb-5">What you'll Learn</h4>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            {/* Section with icon and paragraph */}
                            <section className="mb-4 d-flex">
                                {/* Icon */}
                                <i className="fa-solid fa-check text-success me-3"></i>
                                {/* Paragraph */}
                                <p>Gain an immersive understanding of the practices and skills needed to succeed in an entry-level project management role</p>
                            </section>

                            <section className="mb-4 d-flex">
                                {/* Icon */}
                                <i className="fa-solid fa-check text-success me-3"></i>
                                {/* Paragraph */}
                                <p>Learn how to create effective project documentation and artifacts throughout the various phases of a project</p>
                            </section>

                            <section className="mb-4 d-flex">
                                {/* Icon */}
                                <i className="fa-solid fa-check text-success me-3"></i>
                                {/* Paragraph */}
                                <p>Learn the foundations of Agile project management, with a focus on implementing Scrum events, building Scrum artifacts, and understanding Scrum roles</p>
                            </section>

                            <section className="mb-4 d-flex">
                                {/* Icon */}
                                <i className="fa-solid fa-check text-success me-3"></i>
                                {/* Paragraph */}
                                <p>Practice strategic communication, problem-solving, and stakeholder management through real-world scenarios</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Training Instructor Section */}
            <div className="container p-5">
                <h4 className="text-center mb-5 fw-bold">Training Instructor</h4>
                <div className="row justify-content-start">
                    <div className="col-md-9">
                        <div className="d-flex align-items-center">
                            {/* Image without circular shape */}
                            <div className="overflow-hidden me-3" style={{ width: '200px', height: '200px' }}>
                                <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="Instructor" className="w-100 h-100" style={{ height: '100%' }} />
                            </div>
                            {/* Instructor name and brief description */}
                            <div>
                                <h5 className="fw-bold">Ahmed Ashari</h5>
                                <h6 className="text-muted">Assistant</h6>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternalTraining2;
