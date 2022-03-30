import React from "react";

import Home from "./pages/Home"
import Cars from "./pages/Cars"
import SingleCar from "./pages/SingleCar"
import Error from "./pages/Error"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import {CarProvider} from "./context";

import './App.scss';

function App() {
  return (
    <CarProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cars/" element={<Cars />} />
          <Route exact path="/cars/:link" element={<SingleCar />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarProvider>
  );
}

export default App;
