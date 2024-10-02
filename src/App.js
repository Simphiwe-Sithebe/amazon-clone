import './App.css';
import MainPage from './Component/HomePage/MainPage';
import NavBar from './Component/NavBar/Navigation';
import DisplayContent from './Component/DisplayContent/DisplayContent';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
      <DisplayContent/>
      <PlaceOrder/>
    </div>
  );
}

export default App;
