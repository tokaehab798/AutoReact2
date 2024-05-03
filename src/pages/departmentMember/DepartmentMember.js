import React, { useState } from "react";
import "./DepartmentMember.css";

function DepartmentMemberProfile() {
  const [activeTab, setActiveTab] = useState("subjects");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "subjects":
        return (
          <div className="research-paper">
            <div className="shadow p-3 mb-2 bg-white rounded">
              <h5 className="card-title mb-4">About Dr. Rania ElGohary</h5>
              <p className="mb-4">
                Dr. Rania ElGohary is an esteemed figure in the field of
                Artificial Intelligence (AI), currently serving as the Dean of
                the AI Department at Misr University for Science and Technology.
                With a distinguished academic career, she previously held the
                position of Professor of Artificial Intelligence at the Faculty
                of Computer and Information Sciences (FCIS) at Ain Shams
                University. Dr. Rania ElGohary brings a wealth of experience and
                expertise to her role, having studied Information Science at the
                Faculty of Computer and Information Sciences. Her dedication to
                advancing AI education and research is evident through her
                leadership and contributions to academia, making her a valuable
                asset to both institutions and the broader AI community.
              </p>
            </div>
          </div>
        );
      case "image":
        return (
          <div
            className="research-paper d-flex justify-content-center align-items-center"
            style={{ width: "100%", height: "600px" }}
          >
            <div style={{ fontSize: "24px" }}>Research paper placeholder</div>
            {/* 
                    <div className="research-paper d-flex justify-content-center align-items-center" style={{ width: "100%", height: "600px" }}>
                        <embed src="../../assets/Researchpaper.pdf" frameBorder="0" style={{ width: "80%", height: "100%" }} sandbox="allow-scripts" readOnly />
                    </div>
                    */}
          </div>
        );
      case "history":
        return (
          <div className="research-paper">
            <h5 className="card-title">Subjects</h5>
            <div className="shadow-sm p-3 rounded">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AI301</td>
                    <td>NLP</td>
                  </tr>
                  <tr>
                    <td>AI401</td>
                    <td>Introduction to Robotics</td>
                  </tr>
                  <tr>
                    <td>AI521</td>
                    <td>Algorithms</td>
                  </tr>
                  <tr>
                    <td>AI212</td>
                    <td>Pattern Recognition</td>
                  </tr>
                  <tr>
                    <td>AI315</td>
                    <td>Robotics</td>
                  </tr>
                  <tr>
                    <td>AI481</td>
                    <td>Embedded Systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-light">
      <div className="go-back-container" style={{ marginLeft: "20px" }}>
        <a className="go-back-link" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-3 text-center d-flex flex-column align-items-center">
            <div
              className="circle-img mb-3"
              style={{ width: "200px", height: "200px" }}
            >
              <img
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                alt="Member 1"
                className="rounded-circle img-fluid"
              />
            </div>
            <h4>Rania ElGohary</h4>
            <p className="text-muted">Professor</p>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs justify-content-center card-header-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "subjects" ? "active text-success" : ""
                }`}
                onClick={() => handleTabClick("subjects")}
              >
                Brief
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "image" ? "active text-success" : ""
                }`}
                onClick={() => handleTabClick("image")}
              >
                Research Paper
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "history" ? "active text-success" : ""
                }`}
                onClick={() => handleTabClick("history")}
              >
                Subject History
              </a>
            </li>
          </ul>
        </div>
        <div>{renderContent()}</div>
      </div>
    </section>
  );
}

export default DepartmentMemberProfile;
