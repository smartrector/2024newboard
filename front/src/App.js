import "./assets/tStyle.css";
import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./layout/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
