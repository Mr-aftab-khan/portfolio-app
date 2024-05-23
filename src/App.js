import HomePage from "./Pages/HomePage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import Footer from "./Components/footer";
import NavBar from "./Components/navBar";
import Herosection from "./Components/herosection";
function App() {
  return (
    <div className="App">
    {/* <NavBar/> */}
    <HomePage/>
    <Footer/>
    <Herosection/>
    </div>
  );
}

export default App;
