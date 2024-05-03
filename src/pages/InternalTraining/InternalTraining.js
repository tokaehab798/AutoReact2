import React from 'react';
import { Link } from 'react-router-dom';
import "./InternalTraining.css"


function InternalTraining() {
    const srcsoftraining = [
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    ];

    const trainingtittle = [
        "Embedded System",
        "Machine Learning",
        "Data Science"
    ];

    const trainingdescription = [
        "Compact computing systems for specific tasks with real-time constraints.",
        "AI subset enabling computers to learn from data for predictions.",
        "Extracting insights from data using scientific methods and algorithms."
    ];

    return (
        <section className="p-5">
            <div className="container">
                {/* Row for each training source */}
                <div className="row justify-content-center">
                    {/* Column for each training item */}
                    {srcsoftraining.map((src, i) => (
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
                                    <h4 className="card-title">{trainingtittle[i]}</h4>
                                    {/* Training item description */}
                                    <p className="card-text">{trainingdescription[i]}</p>
                                    {/* Button to apply for training */}
                                    <button className="btn btn-success"> <Link to= "/internaltraining2" style={{textDecoration:'none', color:'white'}}>
                    Apply
                  </Link></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InternalTraining;
