import './App.css';
import MainPage from './Component/HomePage/MainPage';
import NavBar from './Component/NavBar/Navigation';
import DisplayContent from './Component/DisplayContent/DisplayContent';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <MainPage/> */}
      <DisplayContent/>
    </div>
  );
}

export default App;
