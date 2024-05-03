import React, { useState } from 'react';
import './Form.css'; // Import the CSS file containing the styles
import { Link } from 'react-router-dom';


const FormComponent = () => {
    const [hidelabel, setHideLabel] = useState(true);
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setHideLabel(!event.target.value);
    };

    return (
        <section className="p-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-4 bg-light rounded" style={{ maxWidth: '700px' }}>
                        <form action="">
                            <div className="row mb-3 align-items-center">
                                {/* Form Type */}
                                <div className="col-auto">
                                    <p className="fw-bold me-2">Form Type:</p>
                                </div>
                                {/* Dropdown */}
                                <div className="col dropdown-center">
                                    <div className="dropdown">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Form
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><a className="dropdown-item" href="#">Subject Hours</a></li>
                                            <li><a className="dropdown-item" href="#">OverLoad Hours</a></li>
                                            <li><a className="dropdown-item" href="#">Subjects Request</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Description */}
                            <div>
                                <p className={`strong fw-bold position-relative ${hidelabel ? '' : 'ToBeUp'}`} style={{ top: hidelabel ? '10px' : '0' }}>Description:</p>
                                <textarea
                                    name="Description"
                                    id=""
                                    cols="40"
                                    rows="3"
                                    placeholder="Write Your Problem"
                                    style={{ resize: 'none' }}
                                    className="form-control shadow-none position-relative border-0"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                ></textarea>
                            </div>
                            
                            {/* Submit Button */}
                            <div className="d-flex justify-content-end mt-3">
                                <button className="btn btn-success">  <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>Send</Link></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormComponent;
