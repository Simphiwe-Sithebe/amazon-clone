import './App.css';
import MainPage from './Component/HomePage/MainPage';
import NavBar from './Component/NavBar/Navigation';
import DisplayContent from './Component/DisplayContent/DisplayContent';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Checkout from './Component/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
      <DisplayContent/>
      <PlaceOrder/>
      <Checkout/>
    </div>
  );
}

export default App;
