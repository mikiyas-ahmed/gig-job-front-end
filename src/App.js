import React from "react";
// import {useRouter} from 'next/router';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import PageRouter from "./components/PageRouter";
import Footer from "./components/footer/Footer";
import NavBar1 from "./components/navigation-bar/NavBar";
function App() {

  return (
    <>
    <div className="App">
      <NavBar1/>
      <PageRouter/>
      <Footer/>
    </div>
    </>
  );

}

export default App;
