import React, { useState } from 'react';

function AdminAddInternal() {
    const [trainingName, setTrainingName] = useState('');
    const [trainingDescription, setTrainingDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [trainingLink, setTrainingLink] = useState('');

    const handleTrainingSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        const formData = {
            trainingName,
            trainingDescription,
            startDate,
            endDate,
            trainingLink
        };
        console.log(formData); // Just for demonstration, replace with actual submission logic
    };

    const handleCancel = () => {
        // Add cancel logic here
    };

    return (
        <section className="container">
            <div className="go-back-container">
                <a href="#" className="go-back-link">
                    <i className="fas fa-arrow-left"></i> Go Back
                </a>
            </div>
            <form onSubmit={handleTrainingSubmit}>
                <div className="p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="card position-relative" style={{ width: "288px", height: "250px" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                                        <div className="circle-content2 position-relative mb-3">
                                            <i className="fa fa-plus fa-1x text-white position-relative"></i>
                                        </div>
                                        <div>Add New Photo</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="mb-2">
                                    <label htmlFor="competitionName" className="form-label">Training Name</label>
                                    <input type="text" className="form-control" id="competitionName" placeholder="Enter training name" value={trainingName} onChange={(e) => setTrainingName(e.target.value)} required />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="competitionDescription" className="form-label">Training Description</label>
                                    <textarea className="form-control" id="competitionDescription" rows="5" placeholder="Enter training description" value={trainingDescription} onChange={(e) => setTrainingDescription(e.target.value)} required></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 d-flex align-items-center">
                                        <label htmlFor="startDate" className="form-label mr-2">Starting Date:</label>
                                        <div className="mb-2">
                                            <input type="date" id="startDate" className="form-control date-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <label htmlFor="endDate" className="form-label mr-2">Ending Date:</label>
                                        <div className="mb-2">
                                            <input type="date" id="endDate" className="form-control date-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="competitionLink" className="form-label">Training Link</label>
                                    <input type="text" className="form-control" id="competitionLink" placeholder="Enter Training Link" value={trainingLink} onChange={(e) => setTrainingLink(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <h6>Add Training Points</h6>
                        <div className="row">
                            <div className="col-md-11 m-2">
                                <div className="card position-relative" style={{ height: "150px" }}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                                        <div className="circle-content2 position-relative mb-3">
                                            <i className="fa fa-plus fa-1x text-white position-relative"></i>
                                        </div>
                                        <div>Add New point</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container p-5">
                                    <h4 className="text-center mb-3">Training Instructor</h4>
                                    <div className="underline mb-lg-5 bg-success"></div>
                                    <div className="circle-content position-relative">
                                        <i className="fa fa-plus fa-2x text-white position-relative"></i>
                                    </div>
                                    <div className="mt-1 ms-2a">Add New Member</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-md-6 d-flex justify-content-center">
                            <button type="button" className="btn btn-lg btn-outline-success" onClick={handleCancel}>Cancel</button>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <button type="submit" className="btn btn-success btn-lg">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default AdminAddInternal;
