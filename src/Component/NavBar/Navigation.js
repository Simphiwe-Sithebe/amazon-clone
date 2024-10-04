import React, { Component } from 'react';
//we can create nav bar by using the functional component or the class component
//class component "ccc" for short cut
import "./NavBar.css"
//adds the css file to this component so changes will be apparent
import { Link } from "react-router-dom";
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
            <div className="navbar_component">
                <Link style={{textDecoration: "none", color:"white"}} to={"/"}>
                <div className='navbar_logo'> </div>
                </Link>
                <div className='navbar_locator'>
                    <div className='navbar_locatorImage'></div>
                    <div className='navbar_location'><b>South Africa</b></div>
                </div>
                <div className='navbar_searcomponent'>
                    <div >
                        <select className='navbar_dropdown'>
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div><input type='text' className='navbar_searchbox'></input></div>
                    <div className='navbar_searchboxdiv'>
                        <div className='navbar_searchicon'></div>
                    </div>
                </div>
                <div className='navbar_text navbar_signin'>
                    <div className='navbar_hello' style={{fontSize: "14px"}}>Hello, Sign In</div>
                </div>
                <div className='navbar_accounts'>
                    <div style={{fontSize: "14px"}}>Accounts</div> 
                    <div style={{fontWeight: "bold"}}>& Lists</div>
                </div>
                <div className='navbar_returns'>
                    <div style={{fontSize: "14px"}}>Returns </div>
                    <div style={{fontWeight: "bold"}}>& Orders</div>
                </div>
                <div className='navbar_text navbar_cart'>
                    <div src='' className='cart_image'></div>
                    <div className='cart_item'>0</div>
                    <div className='navbar_text_cart'>Cart</div>
                </div>
            </div>
                <div className='navbar_footer'>
                    <div className='navbar_footer_text_container'>
                    <div className='navbar_footer_text'>Best Seller</div>
                        <Link style={{textDecoration: "none", color:"white"}} to={"/display"}>
                        <div className='navbar_footer_text'>Mobile</div>
                        </Link>
                        <div className='navbar_footer_text'>Amazon Pay</div>
                        <div className='navbar_footer_text'>Fashion</div>
                        <div className='navbar_footer_text'>Electronics</div>
                        <div className='navbar_footer_text'>Prime</div>
                        <div className='navbar_footer_text'>New Release</div>
                        <div className='navbar_footer_text'>Customer Service</div>
                        <div className='navbar_footer_text'>Computers</div>
                        <div className='navbar_footer_text'>Home & Kitchen</div>
                    </div>
                    <div className='navbar_image'></div>
                </div> 
            </div>
        );
    }
}
 
export default NavBar;