import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* Sidebar for larger screens  */}
      <Sidebar />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
