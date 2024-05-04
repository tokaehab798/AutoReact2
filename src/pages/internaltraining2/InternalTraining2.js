import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InternalTraining2.css';
import { getInternalTrainingById } from '../../services/internaltraining2';


function InternalTraining2() {
  const { id } = useParams();
  const [internaltraining, setInternalTraining] = useState([]);
console.log(id);
  useEffect(() => {
    const fetchInternalTraining = async () => {
      try {
        const response = await getInternalTrainingById(id)
        setInternalTraining(response.data);
      } catch (error) {
        console.error('Error fetching internal training details:', error);
      }
    };

    fetchInternalTraining();
  }, [id]);

  if (!internaltraining) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Image and Content Section */}
      <div className="p-5">
        <div className="go-back-container" style={{ marginLeft: '20px' }}>
          <a className="go-back-link" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i> Go Back
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {/* Image Section */}
            <div className="col-md-5">
              <img
                src={internaltraining.trainingPicture}
                className="img-fluid rounded-1"
                alt="Internal Training Image"
                style={{ width: '450px' }}
              />
            </div>
            {/* Content Section */}
            <div className="col-md-5 d-flex align-items-center">
              <div>
                {/* Title */}
                <h2>{internaltraining.title}</h2>
                {/* Paragraph */}
                <p>{internaltraining.description}</p>
                {/* Line containing start date, end date, and link */}
                <div>
                  <p className="mb-0">
                    <strong>Starts From:</strong>{' '}
                    <span className="text-secondary">{internaltraining.startsFrom}</span>
                  </p>
                  <div className="d-flex justify-content-between ">
                    <p className="me-5">
                      <strong>Ends At:</strong>{' '}
                      <span className="text-secondary">{internaltraining.endsAt}</span>
                    </p>
                    <button className="btn btn-success ">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What you'll Learn Section */}
      <div className="bg-light">
        <div className="container p-5 ">
          <h4 className="text-center mb-5">What you'll Learn</h4>
          <div className="row justify-content-center">
            <div className="col-md-10">
              {internaltraining.whatYouWillLearn.map((item, index) => (
                <section key={index} className="mb-4 d-flex">
                  <i className="fa-solid fa-check text-success me-3"></i>
                  <p>{item}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Training Instructor Section */}
      <div className="container p-5">
        <h4 className="text-center mb-5 fw-bold">Training Instructor</h4>
        <div className="row justify-content-start">
          <div className="col-md-9">
            <div className="d-flex align-items-center">
              {/* Image without circular shape */}
              <div className="overflow-hidden me-3" style={{ width: '200px', height: '200px' }}>
                <img src={internaltraining.teachingInstructor.profilePicture} alt="Instructor" className="w-100 h-100" style={{ height: '100%' }} />
              </div>
              {/* Instructor name and brief description */}
              <div>
                <h5 className="fw-bold">{internaltraining.teachingInstructor.name}</h5>
                <h6 className="text-muted">{internaltraining.teachingInstructor.role}</h6>
                {/* Add additional details if available */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternalTraining2;
