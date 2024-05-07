import React, { useState } from 'react';
import './Form.css'; 
import { Link } from 'react-router-dom';
import { createForm } from '../../services/Form';

const FormComponent = ({ userId }) => { // Accept userId as a prop
    const [hidelabel, setHideLabel] = useState(true);
    const [description, setDescription] = useState('');
    const [selectedForm, setSelectedForm] = useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setHideLabel(!event.target.value);
    };

    const handleFormSelection = (formType) => {
        setSelectedForm(formType);
    };

    const handleSubmit = () => {
        if (selectedForm) {
            createForm(userId, { subject: selectedForm, description: description })
                .then(response => {
                    console.log('Form submitted successfully:', response);
                    // Optionally, you can reset the form state here
                    setSelectedForm('');
                    setDescription('');
                    setHideLabel(true);
                }).catch(error => {
                    console.error('Error submitting form:', error);
                });
        } else {
            console.error('No form type selected.');
        }
    };

    return (
        <section className="p-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="p-4 bg-light rounded" style={{ maxWidth: '700px' }}>
                        <form>
                            <div className="row mb-3 align-items-center">
                                <div className="col-auto">
                                    <p className="fw-bold me-2">Form Type:</p>
                                </div>
                                <div className="col dropdown-center">
                                    <div className="dropdown">
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            {selectedForm ? selectedForm : 'Select Form'}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li><button className="dropdown-item" onClick={() => handleFormSelection('Subject Hours')}>Subject Hours</button></li>
                                            <li><button className="dropdown-item" onClick={() => handleFormSelection('OverLoad Hours')}>OverLoad Hours</button></li>
                                            <li><button className="dropdown-item" onClick={() => handleFormSelection('Subjects Request')}>Subjects Request</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
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
                            
                            <div className="d-flex justify-content-end mt-3">
                                <button className="btn btn-success" type="button" onClick={handleSubmit}>
                                    <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>Send</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormComponent;
