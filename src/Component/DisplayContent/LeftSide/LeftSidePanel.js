// import React from "react";
// import "./LeftSide.css";

// function LeftSidePanel(props){
//     return (
//         <div className="LeftSize_main">
//             <div className="leftSide_header">
//                 Brand name
//             </div>
//             <div className="leftside_brandName">
//                 <label className="brandname">
//                     <input type="checkbox" value="Apple"/>Apple
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Samsung"/>Samsung
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>Huawei
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>MI
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>Vivo
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>Asus
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>Techno
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>Oppo
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>Mobicel
//                 </label>
//                 <label className="brandname">
//                     <input type="checkbox" value="Huawei"/>Nokia
//                 </label>
//             </div>
//         </div>
//     );
// }
// export default LeftSidePanel;
import React from "react";
import "./LeftSide.css";

function LeftSidePanel(props) {
  return (
    <div className="LeftSide_main">
      {/* Brand Name Section */}
      <div className="leftSide_header">Brand Name</div>
      <div className="leftside_brandList">
        {["Apple", "Samsung", "Huawei", "MI", "Vivo", "Asus", "Techno", "Oppo", "Mobicel", "Nokia"].map((brand, index) => (
          <label className="brandName" key={index}>
            <input type="checkbox" value={brand} />
            {brand}
          </label>
        ))}
      </div>

      {/* Price Range Section */}
      <div className="leftSide_header">Price Range</div>
      <div className="leftside_priceRange">
        <label>
          <input type="checkbox" value="Under 5000" /> Under R5000
        </label>
        <label>
          <input type="checkbox" value="5000 to 10000" /> R5000 - R10000
        </label>
        <label>
          <input type="checkbox" value="10000 to 20000" /> R10000 - R20000
        </label>
        <label>
          <input type="checkbox" value="20000 to 30000" /> R20000 - R30000
        </label>
        <label>
          <input type="checkbox" value="30000 and Above" /> R30000 & Above
        </label>
      </div>

      {/* Customer Ratings Section */}
      <div className="leftSide_header">Customer Ratings</div>
      <div className="leftside_ratings">
        <label>
          <input type="radio" name="rating" value="4 & Up" /> 4★ & Up
        </label>
        <label>
          <input type="radio" name="rating" value="3 & Up" /> 3★ & Up
        </label>
        <label>
          <input type="radio" name="rating" value="2 & Up" /> 2★ & Up
        </label>
        <label>
          <input type="radio" name="rating" value="1 & Up" /> 1★ & Up
        </label>
      </div>

      {/* Discount Section */}
      <div className="leftSide_header">Discount</div>
      <div className="leftside_discount">
        <label>
          <input type="checkbox" value="50% & Above" /> 50% & Above
        </label>
        <label>
          <input type="checkbox" value="40% & Above" /> 40% & Above
        </label>
        <label>
          <input type="checkbox" value="30% & Above" /> 30% & Above
        </label>
        <label>
          <input type="checkbox" value="20% & Above" /> 20% & Above
        </label>
        <label>
          <input type="checkbox" value="10% & Above" /> 10% & Above
        </label>
      </div>
    </div>
  );
}

export default LeftSidePanel;
