import React from 'react';
import "./AdminAddProject"

function AdminAddProject() {
    return (
        <section className="container">
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
                                        <i className="fa fa-plus fa-1x text-white position-relative"></i>
                                    </div>
                                    <div>Add New Photo</div>
                                </div>
                            </div>
                        </div>
                        {/* Input Section */}
                        <div className="col-md-7">
                            {/* Name Input */}
                            <div className="mb-2">
                                <label htmlFor="competitionName" className="form-label"></label>
                                <input type="text" className="form-control" id="competitionName" placeholder="Enter Project name" />
                            </div>
                            {/* Description Input */}
                            <div className="mb-2">
                                <label htmlFor="competitionDescription" className="form-label"></label>
                                <textarea className="form-control" id="competitionDescription" rows="5" placeholder="Enter Project description"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="m-3 row">
                        <div className="col-md-4">
                            <div className="card position-relative" style={{ width: "300px", height: "250px" }}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                                    <div className="circle-content2 position-relative mb-3">
                                        <i className="fa fa-plus fa-1x text-white position-relative"></i>
                                    </div>
                                    <div>Add New Photo</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card position-relative" style={{ width: "300px", height: "250px" }}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                                    <div className="circle-content2 position-relative mb-3">
                                        <i className="fa fa-plus fa-1x text-white position-relative"></i>
                                    </div>
                                    <div>Add New Photo</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card position-relative" style={{ width: "300px", height: "250px" }}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
                                    <div className="circle-content2 position-relative mb-3">
                                        <i className="fa fa-plus fa-1x text-white position-relative"></i>
                                    </div>
                                    <div>Add New Photo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container p-5">
                            {/* Team Members Title */}
                            <h4 className="text-center mb-3">Team Members</h4>
                            {/* Underline */}
                            <div className="underline mb-lg-5 bg-success"></div>
                            <div className="circle-contentdown position-relative">
                                <i className="fa fa-plus fa-2x text-white position-relative"></i>
                            </div>
                            <div className="mt-1 ms-2a">Add New Member</div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-md-6 d-flex justify-content-center">
                            <a href="#" className="text-decoration-none">
                                <div className="btn btn-lg btn-outline-success">Cancel</div>
                            </a>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <a href="#" className="text-decoration-none">
                                <div className="btn btn-success btn-lg">Save</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminAddProject;
