import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Exercise from "../Exercise/Exercise";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [exTime, setExTime] = useState(0);

  useEffect(() => {
    fetch("todosData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  const addToList = (activity) => {
    console.log(activity.time);
    let totalTime = exTime + activity.time;
    setExTime(totalTime);
    console.log(totalTime);
  };

  return (
    <div className="container">
      <div className="activity-container">
        {activities.map((activity) => (
          <Activity
            activity={activity}
            addToList={addToList}
            key={activity.id}
          ></Activity>
        ))}
      </div>
      <div className="time-container">
        <Exercise exTime={exTime}></Exercise>
      </div>
    </div>
  );
};

export default Activities;
