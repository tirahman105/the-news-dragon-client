import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import './Header.css'




const Header = () => {
  
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p className="text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex p-3 bg-color rounded">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className="text-danger" >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      
    </Container>
  );
};

export default Header;
