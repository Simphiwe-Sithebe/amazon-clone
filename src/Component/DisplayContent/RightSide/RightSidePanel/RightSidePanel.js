import React, { useEffect } from "react";
import "./RightSide.css"
import Products from "./Products";
//for ratings
import Rating from '@mui/material/Rating';
function RightSidePanel(props){

    const[listOfProducts, setListOfProducts] = React.useState([]);

    useEffect(() => {
        //need an api call to retrieve data from db instead
        let list = [
        {name : "New Apple iPhone 10 (64GB) - Green", price:"21,342.00", rating:"", image:"https://ik.imagekit.io/clone1010/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253496110"},
        {name : "Samsung galaxy A23 (128GB)- Blue", price : "25,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494600"},
        {name : "New Apple iPhone 12 (128GB)- White", price : "26,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494281"},
        {name : "New Apple iPhone 13 (128GB)- Black", price : "29,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494575"},
        {name : "Samsung Galaxy Note20 (256GB)- Green", price : "26,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253498597"},
        {name : "New Apple iPhone 13 (128GB)- Black", price : "29,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494575"},
        {name : "New Apple iPhone 12 (128GB)- White", price : "26,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494281"},
        {name : "New Apple iPhone 13 (128GB)- Black", price : "29,342.00", rating : "", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494575"},
     
    
    ]
     setListOfProducts(list);
    },[]);

    return (
        <div className="RightSide_main">
            
            {/* <Products rating="2.4" price="21342" name="iPhone 11" image="https://ik.imagekit.io/clone1010/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253496110"/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/> */}

            {
                listOfProducts.map((item) => (
                    <Products definition ={item}/>

                ))
            }

        </div>
    );
}
export default RightSidePanel;