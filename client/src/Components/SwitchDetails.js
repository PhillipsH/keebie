import React, { Component } from 'react';
import logo from '../switch.jpg';

class SwitchDetails extends React.Component{
    render(){
        return(
            <div id="switch-details">
                <img src={logo} />
                <ul>
                    <li>Switch</li>
                    <li>Type</li>
                    <li>Accuation Force</li>
                    <li>Manufacturer</li>
                    <li>Accuation Distance</li>
                </ul>



            </div>
        )
    }
}
export default SwitchDetails