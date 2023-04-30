import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithubSquare,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button variant="outline-primary" className="mb-2">
        {" "}
        <FaGoogle></FaGoogle> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithubSquare> </FaGithubSquare> Login with GitHub
      </Button>

      <div className="my-4">
        <h4>Find Us on</h4>

        <ListGroup>
          <ListGroup.Item className="text-primary">
            <FaFacebook></FaFacebook> Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item className="text-info">
            {" "}
            <FaTwitter></FaTwitter> Tweeter{" "}
          </ListGroup.Item>
          <ListGroup.Item className="text-danger">
            {" "}
            <FaInstagram></FaInstagram> Instagram{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="text-center">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
