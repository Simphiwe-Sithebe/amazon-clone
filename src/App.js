import './App.css';
import MainPage from './Component/HomePage/MainPage';
import NavBar from './Component/NavBar/Navigation';
import DisplayContent from './Component/DisplayContent/DisplayContent';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Checkout from './Component/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/display" element={<DisplayContent />} />
          <Route path="/order/:id" element={<PlaceOrder />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
