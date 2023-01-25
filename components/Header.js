import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="md" variant="light" className="px-2">
      <Navbar.Brand>
        <div>
          <h2>Kenzie&apos;s Web Solutions</h2>
        </div>
      </Navbar.Brand>
      {/* <Navbar.Toggle id="responsiveNav" />
      <Navbar.Collapse id="responsiveNav">
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>About</Nav.Item>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
