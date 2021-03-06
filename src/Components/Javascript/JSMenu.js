import React from "react";

import "./jsmenu.css";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import JSSubMenu from "./JSSubMenu";

class JSMenu extends React.Component {
  render() {
    const direction = "left";
    return (
      <div>
        <Accordion   title={` Drop ${direction} `}
        id={`dropdown-button-drop-${direction}`}
        key={direction} className="jsDropDownMain" defaultActiveKey="2">


          <Card text="dark">

            <Accordion.Toggle eventKey="0">Array Methods</Accordion.Toggle>
            <Card>
                <Accordion.Collapse eventKey="0">
                  <div>
                  <Card.Body><h1>Basics</h1></Card.Body>
                  <JSSubMenu></JSSubMenu>

                  </div>
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
