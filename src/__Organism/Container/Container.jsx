import React from "react";
import "./Container.css";
import Image from "../../assets/Images/Image.png";
import Cube from "../../assets/Images/cube.svg";
import Questions from "../../__Molecule/Questions/Questions";
import HiddenImage from "../../assets/Images/Hidden_image.svg";
import Shadow from "../../assets/Images/shadow.svg";
function Container() {
  return (
    <div className="container">
      <div className="images">
        <img className="image" src={Image} alt="tasks" />
        <img className="cube" src={Cube} alt="cube" />
      </div>
      <div className="hidden_div">
        <img className="hid_img" src={HiddenImage} alt="tasks" />
        <img className="shadow" src={Shadow} alt="shadow" />
      </div>
      <Questions />
    </div>
  );
}
export default Container;
