import React from "react";
import "./RightSide.css"
function Products(props){
    return (
        <div className="product_main" >
            <div className="product_image">
                <img src = {props.definition.image} height="300px"/>
            </div>
            <div className="product_name">
                {props.definition.name}
            </div>
            <div className="product_rating">
                {props.definition.rating}
            </div>
            <div className="product_prize">
                {props.definition.price}
            </div>
        </div>
    );
}
export default Products;