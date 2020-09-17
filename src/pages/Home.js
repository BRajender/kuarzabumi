import React from "react";
//Layout
import MainLayout from "../layouts/MainLayout";
//Components
import Carousel from "../components/page_elements/Carousel";
//css
import "../styles/Home.css";

function Home(props) {
  return (
    <MainLayout>
      <Carousel />
      <div className="automobile aboutcontent">
        <div className="container">
          <h2 className="text-uppercase">Welcome to Kuarzabumi</h2>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
