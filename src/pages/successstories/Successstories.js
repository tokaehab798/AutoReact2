import React, { useCallback, useEffect, useState } from "react";
import "./Successstories.css"; // Make sure to import your CSS file if needed
import { getAllSuccessStories } from "../../services/successstories";

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
  console.log(allSuccessStories);

  // Sample successstories object
  /*
  {
    "_id": "6634a469d8dcf7fd2975dbe9",
    "title": "Amazing Success Story",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "mainPicture": "uploads/1714725992986-test.jpeg",
    "additionalPictures": [
        "uploads/1714725993000-test.jpeg",
        "uploads/1714725993005-test.jpeg"
    ],
    "video": null,
    "teamMembers": [
        {
            "name": "ibrahme",
            "picture": "uploads/1714725993013-test.jpeg",
            "_id": "6634a469d8dcf7fd2975dbea"
        }
    ],
    "__v": 0
  }
  */
  
  return (
    <section className="p-5">
      <div className="container">
        {allSuccessStories.map((story) => (
          <div key={story._id} className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <img src={story.mainPicture} className="card-img-top" alt="Story Main Picture" />
            <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <p className="card-text">{story.description}</p>
              <a href={`/successstory/${story._id}`} className="text-decoration-none d-flex justify-content-start align-items-center text-success">
                <p className="mb-0">See More Details</p>
                <i className="fa fa-arrow-right ms-2" style={{ marginTop: '5px' }}></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyComponent;
