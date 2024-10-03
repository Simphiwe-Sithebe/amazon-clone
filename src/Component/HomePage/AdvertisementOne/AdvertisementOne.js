//component implemented using the functional component
import "./AdvertisementOne.css";
function AdvertisementOne(props){
    return (
        <div className="AdvertisementOne_main">
            <div className="AdvertisementOne_header">Up to 70% off | Electronics clearance store</div>
            <div className="AdvertisementOne_body">
                 <img src="https://ik.imagekit.io/clone1010/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1727253494083" width = "280px"/>
                 </div>
            <div className="AdvertisementOne_footer">see more</div>
        </div>
    );
}
export default AdvertisementOne;
