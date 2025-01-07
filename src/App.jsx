// import "./App.css";
import Contact from "./componenets/contact";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";

export function App(){
  return(
    <div className="App">
      <Navbar/>
      <Home/>
      <Contact/>
    </div>
  )
}