import React from "react";

import Home from "./pages/Home"
import Cars from "./pages/Cars"
import SingleCar from "./pages/SingleCar"
import Error from "./pages/Error"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import {CarProvider} from "./services/context";
import { CARS_ROUTE, SINGLE_CAR_ROUTE } from 'common/routes';

import './App.scss';

function App() {
  return (
    <CarProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={CARS_ROUTE} element={<Cars />} />
          <Route exact path={SINGLE_CAR_ROUTE} element={<SingleCar />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarProvider>
  );
}

export default App;
