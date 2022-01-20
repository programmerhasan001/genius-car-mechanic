import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const { users, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="text-bold fs-4 border border-2 border-danger p-1 rounded text-danger"
        >
          GENIUS-CAR_MECHANIC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services" className="text-white">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts" className="text-white">
              Experts
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-white">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
            {users?.email ? (
              <button onClick={logOut} className="btn btn-danger">
                LogOut
              </button>
            ) : (
              <Nav.Link as={HashLink} to="/login" className="text-white">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {users.email && (
            <Navbar.Text className="text-white">
              Signed in as:
              <a href="#login" className="text-white">
                {users?.displayName}
              </a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
