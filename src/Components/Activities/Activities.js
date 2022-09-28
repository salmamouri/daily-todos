import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("todosData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="container">
      <div className="activity-container">
        {activities.map((activity) => (
          <Activity activity={activity} key={activity.id}></Activity>
        ))}
      </div>
      <div className="time-container">
        <h2>tera time ayega</h2>
      </div>
    </div>
  );
};

export default Activities;
