import React from 'react';
import "./Competition.css"
const MyComponent = () => {
    
    return (
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
                    <div className="col-md-7 d-flex align-items-center">
                        <div>
                            {/* Title */}
                            <h2>LLM Prompt Recovery</h2>
                            {/* Paragraph */}
                            <p>NLP workflows increasingly involve rewriting text, but there's still a lot to learn about how to prompt LLMs effectively. This machine learning competition is designed to be a novel way to dig deeper into this problem.

                                The challenge: recover the LLM prompt used to rewrite a given text. You’ll be tested against a dataset of 1300+ original texts, each paired with a rewritten version from Gemma, Google’s new family of open models. </p>
                            {/* Line containing start date, end date, and link */}
                            <div className=" d-flex justify-content-start">
                                <p className="mb-0 d-inline "><strong>Go To Link:</strong> <a href="#" className="text-success">Your Link</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
