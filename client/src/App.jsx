import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Update from "./components/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route exact path="/" element={<Card />} />
              <Route path="/add" element={<Add />} />
              <Route path="/update/:id" element={<Update />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
