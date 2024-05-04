// TrainingComponent.js
import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Competitions.css";
import { getAllCompetitions } from '../../services/competitions';
import { PATHS } from "../../constants/paths";
import { imageLoadingFailedHandler } from "../../helpers/image";

const TrainingComponent = () => {
  const [allCompetitions, setAllCompetitions] = useState([]);

  const fetchAllCompetitions = useCallback(async () => {
    try {
      const response = await getAllCompetitions();
      const data = response.data;
      setAllCompetitions(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllCompetitions();
  }, [fetchAllCompetitions]);

  console.log(allCompetitions);

  return (
    <section className="p-5">
      <div className="container">
        <div className="row justify-content-center">
          {allCompetitions.map((competition, i) => (
            <div key={i} className="col-md-4 mb-3 d-flex justify-content-center">
              <div className="card shadow" style={{ width: '25rem' }}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={competition.competitionPic} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '100%' }} onError={imageLoadingFailedHandler} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{competition.title}</h4>
                  <p className="card-text text-muted">{competition.description}</p>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">From 12dec to 2jan</p>
                    <button className="btn btn-success">
                      <Link to={PATHS.competition(competition._id)} style={{ textDecoration: 'none', color: 'inherit' }}>Register now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainingComponent;
