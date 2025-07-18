import { useState } from "react";
import { Route, Routes } from "react-router";

import BoardPage from "./pages/BoardPage/BoardPage";
import WidgetPage from "./pages/WidgetPage/WidgetPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<BoardPage />} />
      <Route path="/backlog" element={<BoardPage />} />
      <Route path="/widgets" element={<WidgetPage />} />
    </Routes>
  );
}

export default App;
