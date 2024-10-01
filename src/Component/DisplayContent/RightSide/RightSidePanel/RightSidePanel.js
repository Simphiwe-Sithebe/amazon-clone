import React, { useEffect } from "react";
import "./RightSide.css"
import Products from "./Products";
function RightSidePanel(props){

    const[listOfProducts, setListOfProducts] = React.useState([]);

    useEffect(() => {
        //need an api call to retrieve data from db
        let list = [
        {name : "iPhone 10", price:"R21342", rating:"2.4", image:"https://ik.imagekit.io/clone1010/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253496110"},
        {name : "iPhone 11", price : "R25342", rating : "2.3", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253498594"},
        {name : "iPhone 12", price : "R26342", rating : "2.4", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494281"},
        {name : "iPhone 13", price : "R29342", rating : "2.5", image : "https://ik.imagekit.io/clone1010/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1727253494575"},
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