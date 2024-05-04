import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./InternalTraining.css"
import { getAllInternalTrainings } from "../../services/internaltraining";
import { imageLoadingFailedHandler } from "../../helpers/image";
import { PATHS } from "../../constants/paths";

function InternalTraining() {
    const [allInternalTrainings, setAllInternalTrainings] = useState([]);

    const fetchAllInternalTrainings = useCallback(async () => {
        try {
            const response = await getAllInternalTrainings();
            const data = response.data;
            setAllInternalTrainings(data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchAllInternalTrainings();
    }, [fetchAllInternalTrainings]);
    console.log(allInternalTrainings);
    return (
        <section className="p-5">
            <div className="container">
                <div className="row justify-content-center">
                    {allInternalTrainings.map((training, index) => (
                        <div key={index} className="col-md-4 mb-3 d-flex justify-content-center">
                            <div className="card shadow" style={{ width: '20rem' }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={training.trainingPicture} className="card-img-top" alt="Training" style={{ objectFit: 'cover', height: '100%' }} onError={imageLoadingFailedHandler} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{training.title}</h4>
                                    <p className="card-text">{training.description}</p>
                                    <button className="btn btn-success">
                                        <Link to={PATHS.internaltraining2(training._id)} style={{ textDecoration: 'none', color: 'white' }}>
                                            Apply
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InternalTraining;
