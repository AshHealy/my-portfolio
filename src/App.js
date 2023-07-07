import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import SoftwareDev from "./components/SoftwareDev";
// import Title from "./styles/Title";
import Header from "./styles/Header";
import Trademark from "./styles/Trademark";




const App = ()=>  {
  return (
    <>
      <Header>Ash Healy</Header>
    
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/software' element={<SoftwareDev/>}/>
            <Route path="*" element={< ErrorPage />} />
          </Routes>

      </Router>

      <Trademark>&copy; 2023 Ashley Healy. All rights reserved. | <span>Trademark &trade; Statement</span></Trademark>

    </>
  );
}

export default App;
