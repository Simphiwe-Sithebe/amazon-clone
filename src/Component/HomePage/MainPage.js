//State: The state is an object that stores data which can change over the lifetime of a component. It is an instance of the component class and is used to record and react to user events. State is optional and only needed if you want to store data that can change over time in a component.
//Lifecycle methods: Lifecycle methods are methods that get called at different points during a component's life. They are optional and can be used to execute code at specific points in the life of a component. They can be used to initialize state, fetch data from an API, set timers, or integrate with other libraries. There are three categories of lifecycle methods: Mounting, Updating, and Unmounting.
import React, { Component } from 'react'
import "./MainPage.css";
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import DealOfTheDay from './DealOfTheDay/DealOfTheDay';
import CategoryPanel from './CategoryPanel/CategoryPanel';
import BannerAd from './BannerAd/BannerAd';
import TrendingProducts from './TrendingProducts/TrendingProducts';
class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className='mainpage'>
                
                <div style={{paddingTop: "300px", display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                    <AdvertisementOne></AdvertisementOne>
                    <DealOfTheDay/>
                    <AdvertisementFour/>
                    <DealOfTheDay/>
                    {/* <AdvertisementOne></AdvertisementOne>
                    <AdvertisementFour/>
                    <DealOfTheDay/>
                    {/* <CategoryPanel/> */}
                    
                    
                    <BannerAd/>
                    <TrendingProducts/>
                    
                </div>
            </div>
        );
    }
}

export default MainPage;