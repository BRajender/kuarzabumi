import React from "react";
//components
import Header from "../components/page_elements/Header";
import Footer from "../components/page_elements/Footer";

function MainLayout(props) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "500px" }}>{props.children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
