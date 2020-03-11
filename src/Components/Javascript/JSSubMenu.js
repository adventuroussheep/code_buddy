import React from "react";
import Prism from "prismjs";

import "./jsmenu.css";

import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "../CodeFormatter/prism.css";
// import "../CodeFormatter/prism";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class JSSubMenu extends React.Component {
  render() {
    return (
      <div>
        <pre>
          <code>
    ${`<h1>hello</h1>`}
          </code>
        </pre>
        <CodeMirror contentEditable
  value='<h1>I ♥ react-codemirror2</h1>'
  options={{
    // mode: 'javascript',
    theme: 'prism',
    lineNumbers: true
  }}
  onChange={(editor, data, value) => {
  }}><pre><code>asdf</code></pre></CodeMirror>


        <Accordion className="jsDropDownSub" defaultActiveKey="2">


          <Card className="subCard" text="dark">

            <Accordion.Toggle className="subHeader" as={Card} eventKey="0">Array.map</Accordion.Toggle>
            <Card>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="subText">
                    
                  <CodeMirror contentEditable
  value='<h1>I ♥ react-codemirror2</h1>'
  options={{
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  }}
  onChange={(editor, data, value) => {
  }}
/></Card.Body>
                   
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
