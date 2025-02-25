import React from "react";
import "./Programs.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import program_icon1 from "../../assets/program_icon1.svg";
import program_icon2 from "../../assets/program_icon2.svg";
import program_icon3 from "../../assets/program_icon3.svg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="photo" />
        <div className="caption">
          <img src={program_icon2} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="photo" />
        <div className="caption">
          <img src={program_icon1} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={program_icon3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
