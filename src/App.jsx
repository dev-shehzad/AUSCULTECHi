import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Technology from "./pages/technology/Technology";
import Team from "./pages/team/Team";
import News from "./pages/news/News";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default App;
