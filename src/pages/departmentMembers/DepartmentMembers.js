import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DepartmentMembers.css";
import { getAllStaff } from "../../services/staff";

function DepartmentMembers() {
  const handleGoBack = () => {
    window.history.back();
  };

  const [allStaff, setAllStaff] = useState([]);

  const fetchAllStaff = useCallback(async () => {
    try {
      const response = await getAllStaff();

      const { data } = response;

      setAllStaff(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllStaff();
  }, [fetchAllStaff]);

  console.log(allStaff);

  // Sample data arrays (replace with real data from API or other sources)
  const srcs = [
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  ];
  const names = ["Member One", "Member Two"];
  const roles = ["Role One", "Role Two"];
  const links = ["/departmentMember", "/departmentMember"];

  return (
    <section className="departments-section p-5" style={{ marginTop: "20px" }}>
      <div className="go-back-container" style={{ marginBottom: "20px" }}>
        <a href="#" className="go-back-link" onClick={handleGoBack}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center mb-5">Meet Our Team</h2>
            <div className="row justify-content-center">
              {srcs.map((src, i) => (
                <div key={i} className="col-md-3 text-center mb-4">
                  <div className="circle-img">
                    <img
                      src={src}
                      alt={`Member ${i + 1}`}
                      className="rounded-circle img-fluid"
                      style={{ width: "250px" }}
                    />
                  </div>
                  <h5 className="mt-2">{names[i]}</h5>
                  <p className="mb-0 mt-0">{roles[i]}</p>
                  <Link
                    to={links[i]}
                    className="text-success text-decoration-none"
                  >
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepartmentMembers;
