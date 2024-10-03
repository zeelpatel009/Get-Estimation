import React from "react";
import Header from "../layout/Header.js";
import Footer from "@/layout/Footer.js";
import Home from "./home/Home.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Index;
