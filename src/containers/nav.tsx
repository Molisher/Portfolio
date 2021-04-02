import React from "react";
import { ROUTES } from "../constants/ROUTES";
import { Nav } from "../components";

export default function NavContainer() {
  return (
    <Nav>
      <Nav.Link to={ROUTES.ABOUT}>
        About <Nav.Number>01</Nav.Number>
      </Nav.Link>

      <Nav.Break />
      <Nav.Link to={ROUTES.WORK}>
        Work <Nav.Number>02</Nav.Number>
      </Nav.Link>

      <Nav.Break />
      <Nav.Link to={ROUTES.CONTACT}>
        Contact
        <Nav.Number>03</Nav.Number>
      </Nav.Link>
    </Nav>
  );
}
