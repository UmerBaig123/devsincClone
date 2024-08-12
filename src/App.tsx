// import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="intro">
        <div className="heading">Be the market leader in your industry</div>
        <div className="sub-heading">
          Access 2,000+ passionate and experienced software engineers with
          skillsets in 100+ technologies, in your timezone.
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn schedule">Schedule Free Strategy Call</button>
          <button className="btn">See our Work</button>
        </div>
      </div>
      <div className="section-heading">
        From Idea to Completion, we bring Full-Stack Expertise
      </div>
    </>
  );
}

export default App;
