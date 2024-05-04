import React, { useState } from 'react';
import "./AdminForm.css"
import { imageLoadingFailedHandler } from '../../helpers/image';

function AdminForm() {
    const [srcsofforms, setSrcsOfForms] = useState([
        { src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png", showSendTo: false, imageWidth: '200px' },
        { src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png", showSendTo: false, imageWidth: '200px' }
    ]);
    const adminformname = ["Mohamed Ahmed", "Hazem Ehab"];
    const adminformid = ["94260", "91222"];
    const adminformproblem = ["OverLoad Hours", "Grades"];

    const selectedHandling = (option, index) => {
        const updatedForms = [...srcsofforms];
        if (option === 'Others') {
            updatedForms[index].showSendTo = true;
            updatedForms[index].imageWidth = "250px";
        } else {
            updatedForms[index].showSendTo = false;
            updatedForms[index].imageWidth = "200px";
        }
        setSrcsOfForms(updatedForms);
    };

    const toggleSendTo = (event, index) => {
        event.stopPropagation();
        const updatedForms = [...srcsofforms];
        updatedForms[index].showSendTo = !updatedForms[index].showSendTo;
        setSrcsOfForms(updatedForms);
    };

    const toggleDropdown = (event) => {
        event.stopPropagation();
    };

    return (
        <section className="p-5">
            <div className="container" style={{ maxWidth: '900px' }}>
            <div className="go-back-container" style={{ marginLeft: "20px" }}>
                <a className="go-back-link" onClick={() => window.history.back()}>
                    <i className="fas fa-arrow-left"></i> Go Back
                </a>
            </div>
                <div>
                    {srcsofforms.map((form, index) => (
                        <div className="row p-3 bg-light align-items-center forms-row rounded" key={index}>
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={form.src} alt="" style={{ width: form.imageWidth }} className="img-fluid" onError={imageLoadingFailedHandler} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-flex align-items-center">
                                    <p className="fw-bold me-1 mb-0">Name:</p>
                                    <p className="mb-0">{adminformname[index]}</p>
                                </div>
                                <div className="d-flex align-items-center mt-1">
                                    <p className="fw-bold me-1 mb-0">ID:</p>
                                    <p className="mb-0">{adminformid[index]}</p>
                                </div>
                                <div className="d-flex align-items-center mt-1">
                                    <p className="fw-bold me-1 mb-0">Form:</p>
                                    <p className="mb-0">{adminformproblem[index]}</p>
                                </div>
                                <div className="d-flex mt-1">
                                    <p className="fw-bold me-1 mb-0">Handling:</p>
                                    <div className="dropdown" onClick={(e) => toggleDropdown(e)}>
                                        <button className="btn btn-outline-success dropdown-toggle" type="button" id={`handlingDropdown${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                                            Handle by
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" onClick={() => selectedHandling('MySelf', index)}>Handling by Myself</a></li>
                                            <li><a className="dropdown-item" onClick={() => selectedHandling('Others', index)}>Handling by Others</a></li>
                                        </ul>
                                    </div>
                                    <button className="btn btn-success ms-auto" onClick={() => !form.showSendTo && console.log('Download')} hidden={form.showSendTo}>
                                        Download
                                    </button>
                                </div>
                                {form.showSendTo && (
                                    <div className="d-flex mt-1">
                                        <p className="fw-bold me-1 mb-0">Send to:</p>
                                        <div className="dropdown">
                                            <button className="btn btn-success dropdown-toggle" type="button" id={`sendToDropdown${index}`} data-bs-toggle="dropdown" aria-expanded="false">
                                                sent to
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">DR Mohamed El Mahalawy</a></li>
                                                <li><a className="dropdown-item" href="#">DR Mohanad Deif</a></li>
                                                <li><a className="dropdown-item" href="#">TA Shimaa Bahaa</a></li>
                                            </ul>
                                        </div>
                                        <button className="btn btn-success ms-auto">
                                            Send
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AdminForm;
