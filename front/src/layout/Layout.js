import React from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="container m-auto bg-slate-300">
        <Navbar />
      </div>

      <div className="container m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
