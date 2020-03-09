import React from "react";

import "./mainlist.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import JSMenu from "../Javascript/JSMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

class MainList extends React.Component {
  render() {


    return (
      <div>
        <Accordion className="dropDownMain" defaultActiveKey="2">
          <Card text="dark">
            <Accordion.Toggle eventKey="0">Javascript</Accordion.Toggle>
            <Card>
              <Accordion.Collapse eventKey="0">
                <JSMenu></JSMenu>
              </Accordion.Collapse>
            </Card>
          </Card>

          <Card text="dark">
            <Accordion.Toggle eventKey="1">CSS</Accordion.Toggle>
            {/* <List></List> */}
            <Accordion.Collapse eventKey="1">
              <div className="listDiv"></div>

            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default MainList;
