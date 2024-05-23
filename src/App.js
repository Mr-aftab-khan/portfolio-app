import HomePage from "./Pages/HomePage";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import Footer from "./Components/footer";
import NavBar from "./Components/navBar";
import Header from "./Components/header";

function App() {
  return (
    <div className="App">
    {/* <NavBar/> */}
    <HomePages/>
    <Footer/>
    <Header/>  
    </div>
  );
}

export default App;
