import React from 'react'
import './PlaceOrder.css'
import Grid from '@mui/material/Grid';
import { Paper, Rating } from '@mui/material';

 function PlaceOrder(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={5}>
            <img className='placeorder_image' src='https://ik.imagekit.io/clone1010/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253498594'/>
        </Grid>
        <Grid item xs={4}>
            <div className='placeorder_details'>
            <div style={{fontSize:"24px", lineHeight:"32px", fontWeight:"600"}}>New Apple iPhone 13 (128GB) - Blue</div>
            <div>
                <Rating name="read-only" value="4" style={{fontSize:"20px"}} readOnly/>
                35,990 ratings |
                1000+ answered questions
                </div>
                <hr></hr>
                <div>
                    <div className='textgap'>Price: <span className='pricetag'>R35,990.00</span></div>
                    <div className='textgap'>Free delivery: <strong> Monday, Oct 21</strong></div>
                    <div className='textgap'>EMI starts at R2,401. No cost EMI available</div> <div className='textgap emi-info'>
                        <strong>EMI Options:</strong>
                        <ul>
                            <li>3 months: R12,000/month</li>
                            <li>6 months: R6,500/month</li>
                            <li>12 months: R3,400/month</li>
                        </ul>
                    </div>
                    <div className='textgap'>
                        <strong>Bank Offers:</strong>
                        <ul>
                            <li>5% cashback on XYZ Bank Credit Cards</li>
                            <li>10% off on your first order with ABC Bank</li>
                            <li>Flat R500 off on debit card purchases over R20,000</li>
                        </ul>
                    </div>
                    <div className='textgap'>
                        <strong>Exchange Offer:</strong> Up to R5,000 off on old devices
                    </div>
                    <div className='textgap'>
                        <strong>Warranty:</strong> 1 year manufacturer warranty for device and 6 months for accessories
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item xs={3}>
            <Paper varient="outlined" className='placeorder_order'  >
                <button className='placeorder_button addtocart'>Add to Cart</button>
                <button className='placeorder_button buynow'>Buy Now</button>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default PlaceOrder;
