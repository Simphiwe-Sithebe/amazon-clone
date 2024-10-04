import React from "react";
import "./Checkout.css";
import Grid from '@mui/material/Grid';
import Checkoutitems from "./Checkoutitems";

function Checkout() {
    return (
        <div className="checkout_body">
            <Grid container>
                <Grid item={10}>
                    <div className="checkout_cointainer">
                        <div style={{fontSize: "30px", fontWeight: "500", padding: "20px 0px 0px 20px"}}>Shopping Cart</div>
                        <div>
                            <Checkoutitems/>
                            <Checkoutitems/>
                            
                        </div>
                    </div>
                </Grid >
                <Grid item={2}>
                    <div style={{width: "300px", height:"200px",padding: "20px", marginTop: "20px", backgroundColor: "white"}}>
                        <div style={{fontSize: "26px"}}>Subtotal (2 items):<strong> R35,990.00</strong></div>
                        <div style={{paddingTop: "25px ", textAlign: "center"}}>
                            <button className="placeorder_button">Proceed to checkout</button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default Checkout;