import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blog-container">
      <div className="blog">
        <h1>How does react works?</h1>
        <p>
          React actually is a javascript library. It helps to build user
          interface. React divides user interface into many pieces of codes such
          as components.In react we can pass data as a props from one components
          to another. It makes application effecient and flexible.
        </p>
      </div>
      <div className="blog">
        <h1>Differences between Props and State?</h1>
        <p>
          The basic difference between Props and State is that props are
          immutable and Sate is mutable.By using props data can be passes one
          components to another but State keep the informaton of
          components.Props can accessed through child components but state
          cannot.State cannot male components reusable but props can.
        </p>
      </div>
      <div className="blog">
        <h1>What Does UseEffect work other than loading data?</h1>
        <p>
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers. useEffect accepts two arguments. The
          second argument is optional.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
