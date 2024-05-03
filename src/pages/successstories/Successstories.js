import React from 'react';
import "./Successstories"

const MyComponent = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">AWS Climathon hackathon Competition</h5>
                        <p className="card-text">1'st place</p>
                        <a href="/successstory" className="text-decoration-none d-flex justify-content-start align-items-center text-success">
                            <p className="mb-0">See More Details</p>
                            <i className="fa fa-arrow-right ms-2" style={{ marginTop: '5px' }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyComponent;
