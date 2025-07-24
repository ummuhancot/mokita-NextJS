import WorldLiterature from "@/components/world-literature";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <WorldLiterature />
      {children}
    </div>
  );
};

export default Layout;
