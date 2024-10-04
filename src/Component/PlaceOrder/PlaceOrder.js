import React, { useEffect }from 'react'
//import React, { useEffect } from "react";
import './PlaceOrder.css'
import Grid from '@mui/material/Grid';
import { Paper, Rating } from '@mui/material';
import { Link, useParams } from "react-router-dom";

 function PlaceOrder(props) {
     const[productDetails, setProductDetails] = React.useState([]);

     let{id} = useParams();

    useEffect(() => {
        //need an api call to retrieve data from db instead
        let list = [
        {id: 1123, name : "New Apple iPhone 10 (64GB) - Green", price:"21,342.00", rating:"", image:"https://ik.imagekit.io/clone1010/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253496110"},
        {id: 1124, name : "Samsung galaxy A23 (128GB)- Blue", price : "25,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494600"},
        {id: 1125, name : "New Apple iPhone 12 (128GB)- White", price : "26,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494281"},
        {id: 1126,name : "New Apple iPhone 13 (128GB)- Black", price : "29,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494575"},
        {id: 1127,name : "Samsung Galaxy Note20 (256GB)- Green", price : "26,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253498597"},
        {id: 1128,name : "New Apple iPhone 13 (128GB)- Black", price : "29,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494575"},
        {id: 1129,name : "New Apple iPhone 12 (128GB)- White", price : "26,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494281"},
        {id: 11210,name : "New Apple iPhone 13 (128GB)- Black", price : "29,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494575"},
     
    
    ]
    //fake api
    let item = list.filter(item =>{
        if(item.id == id){
            return item;
        }
    })



    setProductDetails(list);
    },[]);

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
        <Paper variant="outlined" className="placeorder__order">
                        <div>
                            <div><strong>Without Exchange</strong></div>
                            <div>50,999</div>
                            <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
                            <div>
                                <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                                <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                            </div>
                            <div > 
                                <Link to={"/checkout"}>
                                <button className="placeorder__button addtocart" >Add to Cart</button>
                                </Link>
                                
                                    <button className="placeorder__button buynow">Buy Now</button>
                                
                            </div>
                        </div>
                    </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default PlaceOrder;
