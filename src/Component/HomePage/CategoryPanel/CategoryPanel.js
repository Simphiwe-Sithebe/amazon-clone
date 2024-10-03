import React from "react";
import "./CategoryPanel.css";

function CategoryPanel() {
  return (
    <div className="CategoryPanel_main">
      <div className="CategoryPanel_header">Shop by Category</div>
      <div className="CategoryPanel_body">
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/box1_4.jpg?updatedAt=1727253481626"
            alt="Category 1"
            className="category_image"
          />
          <span>Electronics</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/box1_1.jpg?updatedAt=1727253480786"
            alt="Category 2"
            className="category_image"
          />
          <span>Clothing</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/box2_4.jpg?updatedAt=1727253481612"
            alt="Category 3"
            className="category_image"
          />
          <span>Home Appliances</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryPanel;
