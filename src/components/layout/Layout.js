import React from "react";
import Navbar from "./Sidebar";

const Layout = ({ children }) => (
  <div className="container ">
    <main className="row w-100 ml-auto mr-auto mt-5 mb-3">
      <div className="col-sm-12 col-md-4 col-lg-4 p-3">
        <Navbar />
      </div>
      <div className="cold-sm-12 col-md-8 col-lg-8 p-3">
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
    </main>
  </div>
);

export default Layout;
