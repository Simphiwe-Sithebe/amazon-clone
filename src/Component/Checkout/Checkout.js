import React from "react";
import "./Checkout.css";
import Grid from '@mui/material/Grid';
import Checkoutitems from "./Checkoutitems";

function Checkout() {
    return (
        <div>
            <Grid container>
                <Grid item xs={10}>
                    <div>
                        <div>Shopping cart</div>
                        <div>
                            <Checkoutitems/>
                            <Checkoutitems/>
                            <Checkoutitems/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default Checkout;