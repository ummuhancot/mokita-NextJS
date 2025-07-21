import TurkishLiterature from '@/components/turkish-literature'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", 
        flexDirection: "column",
        alignItems: "center" }}
    >
      <TurkishLiterature />
      {children}
    </div>
  );
};

export default Layout