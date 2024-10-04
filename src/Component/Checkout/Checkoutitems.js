import React from "react";
import "./Checkout.css";
function Checkoutitems(props) {
    return(
        <div>
           <div style={{border: "1px solid #E7E7E7", width: "90%",display:"flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src="https://ik.imagekit.io/clone1010/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253498594/>" alt="mobile" className="checkout_image"/>
                </div>
                <div style={{marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="text_gap">New Apple iPhone 12 (16GB) - Blue</div>
                    <div style={{fontWeight: "bold"}} className="text_gap">R23.569.00</div>
                    <div className="text_gap">In stock</div>
                </div>
           </div>
        </div>
    );
}
export default Checkoutitems;