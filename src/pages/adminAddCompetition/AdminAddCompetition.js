import React, { useState } from 'react';
import "./AdminAddCompetition.css"

function AdminAddCompetition() {
    const [competitionData, setCompetitionData] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        link: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCompetitionData({
            ...competitionData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can now access the form data in the competitionData state object
        console.log(competitionData);
        // Add your form submission logic here, like making an API call
    };

    return (
        <section className="container">
            <form onSubmit={handleSubmit}>
                <div className="go-back-container" style={{ marginLeft: "20px" }}>
                    <a className="go-back-link" onClick={() => window.history.back()}>
                        <i className="fas fa-arrow-left"></i> Go Back
                    </a>
                </div>
                {/* Competition Section */}
                <div className="p-5">
                    <div className="container">
                        <div className="row">
                            {/* Competition Cards */}
                            <div className="col-md-4 mb-3">
                                <div className="card position-relative" style={{ width: "288px", height: "250px" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                                        <div className="circle-content2 position-relative mb-3">
                                            <i className="fa fa-plus fa-2x text-white position-relative"></i>
                                        </div>
                                        <div>Add New Photo</div>
                                    </div>
                                </div>
                            </div>
                            {/* Input Section */}
                            <div className="col-md-7">
                                {/* Name Input */}
                                <div className="mb-2">
                                    <label htmlFor="competitionName" className="form-label">Competition Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter competition name" value={competitionData.name} onChange={handleChange} />
                                </div>
                                {/* Description Input */}
                                <div className="mb-2">
                                    <label htmlFor="competitionDescription" className="form-label">Competition Description:</label>
                                    <textarea className="form-control" id="description" rows="5" placeholder="Enter competition description" value={competitionData.description} onChange={handleChange}></textarea>
                                </div>
                                {/* Starting and Ending Date Inputs */}
                                <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <label htmlFor="startDate" className="form-label mr-2">Starting Date:</label>
                                        <div className="mb-2">
                                            <input type="date" id="startDate" className="form-control date-input" value={competitionData.startDate} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <label htmlFor="endDate" className="form-label mr-2">Ending Date:</label>
                                        <div className="mb-2">
                                            <input type="date" id="endDate" className="form-control date-input" value={competitionData.endDate} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                {/* Competition Link Input */}
                                <div className="mb-2">
                                    <label htmlFor="competitionLink" className="form-label">Competition Link:</label>
                                    <input type="text" className="form-control" id="link" placeholder="Enter competition Link" value={competitionData.link} onChange={handleChange} />
                                </div>
                                {/* Buttons */}
                                <div className="row justify-content-center align-items-center mt-5">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <button type="button" className="btn btn-lg btn-outline-success">Cancel</button>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success btn-lg">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default AdminAddCompetition;
