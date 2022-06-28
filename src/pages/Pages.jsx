import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Diet from "./Diet";
import Food from "./Food";
import Meal from "./Meal";
import Database from "./Database";
import Recipe from "../components/Recipe";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/food" element={<Food />} />
      <Route path="/meal" element={<Meal />} />
      <Route path="/database/:query" element={<Database />} />
      <Route path="/database/:query/:type" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
