import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (porps) => {
  return (
    <div>
      Layout
      <Header />
      <main>{porps.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
