import React from "react";
import { Container } from "react-bootstrap";
import Header from "@/components/header";
import Footer from "@/components/footer";


const Layout = ({ children }) => {
  return (
    <div>
      <Container className="mb-5 p-2" >
        <Header />
      </Container>

      <Container>{children}</Container>

      <Container
       
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
