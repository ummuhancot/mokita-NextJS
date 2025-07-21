"use client";

import React from "react";
import menuItems from "@/helpers/data/menu-items.json";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="navbaritem">
        <Navbar.Brand href="/" className="headerfont">
          MOKİTA'S WORLD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto headerrr">
            {menuItems.map((item) => (
              <Nav.Link key={item.id} href={item.url}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
