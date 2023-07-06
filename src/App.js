import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";



const App = ()=>  {
  return (
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="*" element={< ErrorPage />} />
          </Routes>

      </Router>
  );
}

export default App;
