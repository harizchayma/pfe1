import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import {
  Dashboard,

} from "./scenes";
import Client from "./scenes/Client/client";
import Vehicules from "./scenes/Vehicules/Vehicules";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/client" element={<Client />} />
          <Route path="/vehicules" element={<Vehicules/>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
