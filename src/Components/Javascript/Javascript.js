import React from "react";

import "./javascript";
import { render } from "@testing-library/react";

class Javascript extends React.Component {
    constructor(props){
        super(props)
        this.stats = {}
    }
    
render() {
    return(
        <h1>Javascript</h1>
        )
    }
}

export default Javascript;