import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="md" variant="light" className="px-2">
      <Navbar.Brand>
        <div>
          <h2>Kenzie&apos;s Digital Solutions</h2>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle id="responsiveNav" />
      <Navbar.Collapse id="responsiveNav">
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} href="/" >Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/about" >About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} href="/work" >Recent Work</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
