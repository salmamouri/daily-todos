import React, { useEffect, useState } from "react";
import "./Activities.css";

const Activities = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch("todosData.json")
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, []);
  return (
    <div className="container">
      <div className="activity-container">
        <h1>hi zillur</h1>
      </div>
      <div className="time-container">
        <h2>tera time ayega</h2>
      </div>
    </div>
  );
};

export default Activities;
