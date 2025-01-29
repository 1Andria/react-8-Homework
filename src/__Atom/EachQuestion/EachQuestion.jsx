import React, { useState } from "react";
import "./EachQuestion.css";
import Arrow from "../../assets/Images/arrow.png";
function EachQuestion({ isActive, onClick, author, quote }) {
  return (
    <div className={`quest ${isActive ? `quest_plus` : ""}`} onClick={onClick}>
      <div className="txt">
        <h1 className={`author ${isActive ? `author_plus` : ""}`}>{author}</h1>

        <p className={`quoute ${isActive ? `quoute_plus` : ""}`}>{quote}</p>
      </div>
      <img
        src={Arrow}
        className={`arrow ${isActive ? `arrow_plus` : ""}`}
        alt="arrow"
      />
    </div>
  );
}
export default EachQuestion;
