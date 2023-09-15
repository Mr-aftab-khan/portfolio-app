import HomePage from "./Pages/HomePage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import Footer from "./Components/footer";
import NavBar from "./Components/navBar";
function App() {
  return (
    <div className="App">
    {/* <NavBar/> */}
    <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;
