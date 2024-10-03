import React from "react";
import "./DealOfTheDay.css";

function DealOfTheDay() {
  return (
    <div className="DealOfTheDay_main">
      <div className="DealOfTheDay_header">Deal of the Day</div>
      <div className="DealOfTheDay_body">
        <img
          src="https://ik.imagekit.io/clone1010/amazon-image/box1_2.jpg?updatedAt=1727253480970"
          className="deal_image"
          alt="Deal of the Day"
        />
        <div className="deal_description">
          <span>Save up to 50% on Kitchen Appliances</span>
          <br />
          <button className="deal_button">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default DealOfTheDay;
