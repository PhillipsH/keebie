import React, { Component } from 'react';
import logo from '../switch.jpg';

class SwitchItem extends React.Component{

    constructor(props){
        super(props);
        this.state = { apiResponse: "" };

    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return(
            <div class='switch-items' onclick="show-sidebar">
                <img src={logo} width='100%' height='width'/>
                <h3>Cherry MX Blue</h3>
                <span>Clicky</span>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        )
    }

}

export default SwitchItem