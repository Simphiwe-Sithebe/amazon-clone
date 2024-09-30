import React from "react";
import "./LeftSide.css";

function LeftSidePanel(props){
    return (
        <div className="LeftSize_main">
            <div></div>
            <div>
                <label>
                    <input type="checkbox" value="Apple"/>Apple
                </label>
                <label>
                    <input type="checkbox" value="Samsung"/>Samsung
                </label>
                <label>
                    <input type="checkbox" value="Huawei"/>Huawei
                </label>
            </div>
        </div>
    );
}
export default LeftSidePanel;