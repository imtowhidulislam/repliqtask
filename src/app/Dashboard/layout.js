import React from "react";
import DashboardNavbar from "./components/common/Navbar/page";
import { newProductProvider } from "../context/newProduct";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid-layout container">
      <newProductProvider>
        <DashboardNavbar />
        {children}
      </newProductProvider>
    </div>
  );
};

export default DashboardLayout;
