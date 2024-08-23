import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Pizza from "./components/Pizza";


function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Login/>
      <Register/> */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer />
    </>
  );
}

export default App;

