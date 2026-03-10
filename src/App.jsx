import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Homepage";
import Sectors from "./Sectors";
import Analysis from "./Analysis";
import NewApi from "./NewApi";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/Analysis" element={<Analysis/>} />
        <Route path="/sector" element={<Sectors />} />
        <Route path="/newapi" element={<NewApi />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;