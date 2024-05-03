import React from 'react';
import "./ExternalTraining2.css"

function ExternalTraining2() {
    const srcsofextraining = [
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    ];

    const externaltrainingname = [
        "AI & Data Science Python Developer Intern",
        "scholarships from DataCamp"
    ];

    const externaltrainingdescription = [
        "Seeking a motivated Data Science  Intern to enhance AI accuracy by training GPT-3 with new data models. Exciting opportunity.",
        "DataCamp, like Coursera, offers 400+ self-paced courses, focusing on comprehensive data skills to train students in the field."
    ];

    return (
        <section className="p-5">
            <div className="container">
                {/* Row for each training source */}
                <div className="row justify-content-center">
                    {/* Column for each training item */}
                    {srcsofextraining.map((src, i) => (
                        <div key={i} className="col-md-4 mb-3 d-flex justify-content-center">
                            {/* New card structure */}
                            <div className="card shadow" style={{ width: '20rem' }}>
                                {/* Training item image */}
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={src} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
                                </div>
                                {/* Card body */}
                                <div className="card-body">
                                    {/* Training item title */}
                                    <h4 className="card-title">{externaltrainingname[i]}</h4>
                                    {/* Training item description */}
                                    <p className="card-text">{externaltrainingdescription[i]}</p>
                                    <a href="/externaltraining2" className="text-decoration-none d-flex justify-content-center align-items-center text-success mb-3">
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

export default ExternalTraining2;
