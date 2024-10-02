import React from "react";
import "./RightSide.css"
import { Rating } from "@mui/material";
import getSymbolFromCurrency from 'currency-symbol-map'

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
                <Rating name="read-only" value="4" style={{fontSize:"20px"}} readOnly/>
                {props.definition.rating}
            </div>
            <div className="product_prize">
               {getSymbolFromCurrency('ZAR') }  {props.definition.price}
            </div>
        </div>
    );
}
export default Products;