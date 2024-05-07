import React from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Layout() {
  const slideImg = [
    {original: "./images/slide02.png"},
    {original: "./images/slide02.png", description: "이미지2"},
  ];

  return (
    <>
      <div className="container m-auto bg-slate-300">
        <Navbar />
      </div>
      <div>
        <ReactImageGallery items={slideImg} showFullscreenButton={false} />
      </div>

      <div className="container m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
