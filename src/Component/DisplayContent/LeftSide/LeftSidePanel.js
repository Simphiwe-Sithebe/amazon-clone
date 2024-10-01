import React from "react";
import "./LeftSide.css";

function LeftSidePanel(props){
    return (
        <div className="LeftSize_main">
            <div className="leftSide_header">
                Brand name
            </div>
            <div className="leftside_brandName">
                <label className="brandname">
                    <input type="checkbox" value="Apple"/>Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Samsung"/>Samsung
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>Huawei
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>MI
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>Vivo
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>Asus
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>Techno
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>Oppo
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>Mobicel
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Huawei"/>Nokia
                </label>
            </div>
        </div>
    );
}
export default LeftSidePanel;