import React from 'react';
import "./ExternalTraining.css"

const handleGoBack = () => {
    window.history.back();
  };
function ExternalTraining() {
    return (
        <div className="p-5">
             <div
          className="go-back-container"
          style={{ marginLeft: "20px", marginBottom: "20px" }}
        >
          <a href="#" className="go-back-link" onClick={handleGoBack}>
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
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            {/* Title */}
                            <h2>AI & Data Science Python Developer Intern</h2>
                            {/* Paragraph */}
                            <p>Responsibilities:
                                • Develop and implement data models for GPT3
                                • Analyze data to identify trends and areas of improvement
                                • Utilize algorithms and machine learning techniques to optimize GPT3 performance
                                • Monitor and assess system performance and accuracy
                                • Provide technical support for data models
                                • Develop and document data engineering processes and procedures
                                • Work closely with other engineers and data scientists to ensure data accuracy and consistency</p>
                            {/* Line containing start date, end date, and link */}
                            <div>
                                <p className="mb-0"><strong>Start from:</strong> <span className="text-secondary"> 20 Jan</span></p>
                                <div className="d-inline">
                                    <p className="mb-0 d-inline me-5"><strong>Period:</strong> <span className="text-secondary"> 3 weeks</span></p>
                                    <p className="mb-0 d-inline ms-5"><strong>Link:</strong> <a href="#" className="text-success">Your Link</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExternalTraining;
