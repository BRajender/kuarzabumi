import React from "react";
//react-bootstrap
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  NavDropdown,
} from "react-bootstrap";
//css
import "../../styles/Header.css";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
//Link
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="custom-nav p-0 d-block"
    >
      <div className="top-container">
        <Container>
          <Row className="w-100">
            <Col md="6">
              <ul className="list-inline">
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a href="mailto:enquiry@kuarzabumi.my" target="_blank">
                    enquiry@kuarzabumi.my&nbsp;{" "}
                  </a>
                  <a href="tel:+60162227779">
                    {" "}
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    +6016 222 7779
                  </a>
                </li>
              </ul>
            </Col>
            <Col md="6" className="text-right">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <img src="images/facebook.png" alt="" />
                  </a>
                </li>
                <li className="list-inline-item ml-2">
                  <a href="#">
                    <img src="images/instagram.png" alt="" />
                  </a>
                </li>
                <li className="list-inline-item ml-2">
                  <a href="#">
                    <img src="images/LinkedIn.png" alt="" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Navbar.Brand href="#home" className="p-0 m-0">
          <Image src="images/logo-black.png" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className="custom-link">
              Home
            </NavLink>
            <NavLink to="/about" className="custom-link">
              About us
            </NavLink>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/goauto">
                Go auto
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/borgward">
                Borgward
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/activity" className="custom-link">
              Activity
            </NavLink>
            <NavLink to="/contact" className="custom-link">
              Contact us
            </NavLink>
            <NavLink to="/testdrive" className="custom-link">
              Test drive
            </NavLink>
            <NavLink to="/loancalculator" className="custom-link">
              Loan calculator
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
