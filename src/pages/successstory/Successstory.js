import React from 'react';
import "./Successstory.css"; // Import your CSS file for styling

const SuccessStory = () => {
    const srcsofprojects = ["project1.jpg", "project2.jpg", "project3.jpg"]; // Assuming you have an array of image sources
    const compmember = ["member1.jpg", "member2.jpg", "member3.jpg"]; // Assuming you have an array of team member image sources
    const compName = ["Name 1", "Name 2", "Name 3"]; // Assuming you have an array of team member names

    return (
        <section className="container">
               <div className="go-back-container" style={{ marginLeft: "20px" }}>
                <a className="go-back-link" onClick={() => window.history.back()}>
                    <i className="fas fa-arrow-left"></i> Go Back
                </a>
            </div>
            {/* Success Story Section */}
            <div className="p-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        {/* Image Section */}
                        <div className="col-md-4">
                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="img-fluid" alt="Success Story Image" style={{ width: '450px' }} />
                        </div>
                        {/* Content Section */}
                        <div className="col-md-8 d-flex align-items-center">
                            <div>
                                {/* Title */}
                                <h2>AWS Climathon hackathon Success Story</h2>
                                {/* Award */}
                                <h5>1'st place</h5>
                                {/* Paragraph */}
                                <p>The AWS Climathon hackathon held in 2022 at Misr University in Egypt provided a platform for passionate innovators to address pressing climate challenges using cutting-edge technology. Participants collaborated to develop innovative solutions leveraging Amazon Web Services (AWS) to tackle issues such as environmental sustainability, renewable energy, and climate resilience. Through this hackathon, aspiring entrepreneurs, engineers, and environmentalists came together to ideate, prototype, and present solutions aimed at making a positive impact on the environment. The event fostered creativity, collaboration, and technological advancement in the pursuit of a more sustainable future for Egypt and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Picture Section */}
            <div className="p-3">
                <div className="row justify-content-center mb-5 container align-items-center">
                    {srcsofprojects.map((src, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="member">
                                {/* Image */}
                                <div className="d-flex justify-content-center">
                                    <img src={src} className="img-fluid" alt="Project Image" style={{ width: '350px' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Section */}
            <div style={{ width: '100%', height: 0, paddingBottom: '56.25%', position: 'relative', marginBottom: '-25%' }}>
                <iframe src="https://www.youtube.com/embed/zJx_AujshZY" style={{ position: 'absolute', width: '100%', height: '50%', top: 0, left: 0 }} frameBorder="0" allowFullScreen></iframe>
            </div>

            {/* Team Members Section */}
            <div className="">
                <div className="container p-5">
                    {/* Team Members Title */}
                    <h2 className="text-center mb-3">Team Members</h2>
                    {/* Underline */}
                    <div className="underline mb-lg-5 bg-success"></div>

                    {/* Team Members */}
                    <div className="d-flex justify-content-center flex-wrap">
                        {compmember.map((src, index) => (
                            <div className="text-center mx-5 mb-3" key={index}>
                                {/* Team Member Image */}
                                <img src={src} className="rounded-circle" alt={"Person " + (index + 1)} style={{ width: '170px', height: '170px' }} />
                                {/* Team Member Name */}
                                <div className="mt-2">
                                    <h4>{compName[index]}</h4>
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

export default SuccessStory;
