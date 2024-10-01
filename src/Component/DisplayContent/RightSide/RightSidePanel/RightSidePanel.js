import React from "react";
import "./RightSide.css"
import Products from "./Products";
function RightSidePanel(props){
    return (
        <div className="RightSide_main">
            
            <Products/>
            <Products/>
        </div>
    );
}
export default RightSidePanel;