import React from "react";
import "./CategoryPanel.css";

function CategoryPanel() {
  return (
    <div className="CategoryPanel_main">
      <div className="CategoryPanel_header">Shop by Category</div>
      <div className="CategoryPanel_body">
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/box1_1.jpg?updatedAt=1727253480786"

            alt="Electronics"
            className="category_image"
          />
          <span>Electronics</span>
        </div>
        <div className="category_item">
          <img
           src="https://ik.imagekit.io/clone1010/amazon-image/tab3.jpg?updatedAt=1727253489785"
           
            alt="Clothing"
            className="category_image"
          />
          <span>Clothing</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/box1_4.jpg?updatedAt=1727253481626"
            alt="Home Appliances"
            className="category_image"
          />
          <span>Home Appliances</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253496110"
            alt="Electronics"
            className="category_image"
          />
          <span>Mobiles</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/tab7.jpg?updatedAt=1727253489870"
            alt="Clothing"
            className="category_image"
          />
          <span>Furniture</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/box2_3.jpg?updatedAt=1727253481619"
            alt="Home Appliances"
            className="category_image"
          />
          <span>Family Health</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/tab4.jpg?updatedAt=1727253489919"
            alt="Clothing"
            className="category_image"
          />
          <span>Books</span>
        </div>
        <div className="category_item">
          <img
            src="https://ik.imagekit.io/clone1010/amazon-image/box4_4.jpg?updatedAt=1727253485732"
            alt="Clothing"
            className="category_image"
          />
          <span>Luggage</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryPanel;
