import React from "react";
import "./RightSide.css"
function Products(props){
    return (
        <div className="product_main" >
            <div className="product_image">
                <img src = "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253496110" height="300px"/>
            </div>
            <div className="product_name">
                New Apple iPhone 11 (64GB) - Green
            </div>
            <div className="product_rating">
                35,678
            </div>
            <div className="product_prize">
                50,999
            </div>
        </div>
    );
}
export default Products;