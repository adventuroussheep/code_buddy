import React from "react";

import "./jsmenu.css";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class JSSubMenu extends React.Component {
  render() {
    return (
      <div>
        <Accordion className="jsDropDownSub" defaultActiveKey="2">


          <Card className="subCard" text="dark">

            <Accordion.Toggle className="subHeader" as={Card} eventKey="0">Array.map</Accordion.Toggle>
            <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="subText">Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
          </Card>




          <Card text="dark">
            <Accordion.Toggle as={Button} eventKey="1">Object Methods</Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body text="dark">Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>


        </Accordion>
      </div>
    );
  }
}

export default JSSubMenu;
