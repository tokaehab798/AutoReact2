import React from 'react';
import "./DoctorForm.css"

function DoctorForm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <section className="p-5">
                        <div className="row p-3 bg-light align-items-center rounded-2 shadow" style={{ maxWidth: '800px' }}>
                            {/* Image Column */}
                            <div className="col-3">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" width="200px" />
                                </div>
                            </div>
                            <div className="col-1"></div>
                            {/* Text Column */}
                            <div className="col-8">
                                <div className="d-flex align-items-center">
                                    <h6 className="fw-bold me-1 mb-0">Name:</h6>
                                    <p className="mb-0">Mohamed Ezz</p>
                                </div>
                                <div className="d-flex align-items-center mt-1">
                                    <p className="fw-bold me-1 mb-0">ID:</p>
                                    <p className="mb-0">94260</p>
                                </div>
                                <div className="d-flex align-items-center mt-1">
                                    <p className="fw-bold me-1 mb-0">Form Type:</p>
                                    <p className="mb-0">Subject Hours</p>
                                </div>
                                <div className="d-flex justify-content-end align-items-center mt-1">
                                    <button className="btn btn-success">Download</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default DoctorForm;
