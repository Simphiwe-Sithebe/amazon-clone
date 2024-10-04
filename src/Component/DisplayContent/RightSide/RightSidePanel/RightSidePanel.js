import React, { useEffect } from "react";
import "./RightSide.css"
import Products from "./Products";

//for ratings
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
function RightSidePanel(props){

    const[listOfProducts, setListOfProducts] = React.useState([]);

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
     setListOfProducts(list);
    },[]);

    return (
        <div className="RightSide_main">

            {
                listOfProducts.map((item) => (
                    <Link style={{textDecoration: "none", color:"black"}} to={"/order/"+item.id}>
                    <Products definition ={item}/>
                    </Link>
                ))
            }

        </div>
    );
}
export default RightSidePanel;