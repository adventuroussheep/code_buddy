import React from "react";

import "./jsmenu.css";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class JSMenu extends React.Component {
  render() {
    return (
      <div>
        <Accordion className="jsDropDownMain" defaultActiveKey="2">


          <Card text="dark">

            <Accordion.Toggle eventKey="0">Array Methods</Accordion.Toggle>
            <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
          </Card>




          <Card text="dark">
            <Accordion.Toggle eventKey="1">Object Methods</Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body text="dark">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>


        </Accordion>
      </div>
    );
  }
}

export default JSMenu;
