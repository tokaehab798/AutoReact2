import React from 'react';
import { Link } from 'react-router-dom';
import "./Competitions.css"


const srcsofcompetitions = [
  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
];

const tittlesNames = [
  "LLM Prompt Recovery",
  "Enefit-Predict Energy Behavior of Prosumers",
  "Digit Recognizer"
];

const tittlediscription = [
  "LLMs are commonly used to rewrite or make stylistic changes to text. The goal of this competition is to recover the LLM prompt that was used to transform a given text.",
  "The goal of the competition is to create an energy prediction model of prosumers to reduce energy imbalance costs.",
  "The goal in this competition is to take an image of a handwritten single digit, and determine what that digit is.For every in the test set, you should predict the correct label.",
];

class TrainingComponent extends React.Component {
  render() {
    return (
      <section className="p-5">
        <div className="container">
          <div className="row justify-content-center">
            {srcsofcompetitions.map((src, i) => (
              <div key={i} className="col-md-4 mb-3 d-flex justify-content-center">
                <div className="card shadow" style={{ width: '25rem' }}>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={src} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{tittlesNames[i]}</h4>
                    <p className="card-text text-muted">{tittlediscription[i]}</p>
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">From 12dec to 2jan</p>
                      <button className="btn btn-success"> <Link to="/competition" style={{ textDecoration: 'none', color: 'inherit' }}>Register now</Link></button>
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

}

export default TrainingComponent;
