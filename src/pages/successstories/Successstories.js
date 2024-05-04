import React, { useCallback, useEffect, useState } from "react";
import "./Successstories.css"; // Make sure to import your CSS file if needed
import { getAllSuccessStories } from "../../services/successstories";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { imageLoadingFailedHandler } from "../../helpers/image";

const MyComponent = () => {
  const [allSuccessStories, setAllSuccessStories] = useState([]);

  const fetchAllSuccessStories = useCallback(async () => {
    try {
      const response = await getAllSuccessStories();
      const { data } = response;
      setAllSuccessStories(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchAllSuccessStories();
  }, [fetchAllSuccessStories]);

  return (
    <section className="p-5">
      <div className="container">
        {allSuccessStories.map((story) => (
          <div
            key={story._id}
            className="card"
            style={{ width: "18rem", marginBottom: "20px" }}
          >
            <img
              src={story.mainPicture}
              className="card-img-top"
              alt="Story Main Picture"
              onError={imageLoadingFailedHandler}
            />
            <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <p className="card-text">{story.description}</p>

              <Link
                to={PATHS.successstory(story._id)}
                className="text-decoration-none d-flex justify-content-start align-items-center text-success"
              >
                <p className="mb-0">See More Details</p>
                <i
                  className="fa fa-arrow-right ms-2"
                  style={{ marginTop: "5px" }}
                ></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyComponent;
