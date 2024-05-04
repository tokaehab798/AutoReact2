import React, { useCallback, useEffect, useState } from "react";
import "./ExternalTraining2.css";
import { getAllExternalTrainings } from '../../services/externaltrainings';
import { imageLoadingFailedHandler } from "../../helpers/image";
import { Link } from 'react-router-dom';
import { PATHS } from "../../constants/paths";

function ExternalTraining2() {
    const [allExternalTrainings, setAllExternalTrainings] = useState([]);

    const fetchAllExternalTrainings = useCallback(async () => {
        try {
            const response = await getAllExternalTrainings();
            const data = response.data;
            setAllExternalTrainings(data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchAllExternalTrainings();
    }, [fetchAllExternalTrainings]);

    return (
        <section className="p-5">
            <div className="container">
                {/* Row for each training source */}
                <div className="row justify-content-center">
                    {/* Column for each training item */}
                    {allExternalTrainings.map((training, index) => (
                        <div key={index} className="col-md-4 mb-3 d-flex justify-content-center">
                            {/* New card structure */}
                            <div className="card shadow" style={{ width: '20rem' }}>
                                {/* Training item image */}
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={training.trainingPic} className="card-img-top" alt="Training" style={{ objectFit: 'cover', height: '100%' }} onError={imageLoadingFailedHandler} />
                                </div>
                                {/* Card body */}
                                <div className="card-body">
                                    {/* Training item title */}
                                    <h4 className="card-title">{training.title}</h4>
                                    {/* Training item description */}
                                    <p className="card-text">{training.description}</p>
                                    <Link to={PATHS.externaltraining(training._id)} className="text-decoration-none d-flex justify-content-center align-items-center text-success mb-3">
                                        <p className="mb-0">See More Details</p>
                                        <i className="fa fa-arrow-right ms-2" style={{ marginTop: '5px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExternalTraining2;
