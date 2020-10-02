import React, { Component } from 'react';
import logo from '../switch.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SwitchDetails extends React.Component{

    render(){
        const{details} = this.props.switchDetails
        const{switches} = this.props.keyboard
        const switchItem = switches.filter(({_id}) => _id === details);
        // let {switchName} = "N/A"
        // let {switchType} = "N/A"
        // let {manufacturer} = "N/A"
        // let {actuationForce} = "N/A"
        // let {actuationDistance} = "N/A"
        // if(switchItem[0] != undefined){
        //     switchName = switchItem[0].switchName
        //     switchType = switchItem[0].switchType
        //     manufacturer = switchItem[0].manufacturer
        //     actuationForce = switchItem[0].actuationForce
        //     actuationDistance = switchItem[0].actuationDistance
        // }

        return(
            <div id="switch-details">
                <img src={logo} style={{width:'100%'}}/>
                {switchItem.map(({switchName, switchType, manufacturer, actuationForce, actuationDistance}) =>
                    <ul>
                    <li>Switch: <b>{switchName.toLowerCase()}</b></li>
                    <li>Type : <b>{switchType.toLowerCase()}</b></li>
                    <li>manufacturer : <b>{manufacturer.toLowerCase()}</b></li>
                    <li>Accuation Force: <b>{actuationForce}</b></li>
                    <li>Accuation Distance: <b>{actuationDistance}</b></li>
                    </ul>
                )}


            </div>
        )
    }
}
SwitchDetails.propTypes={
    keyboard: PropTypes.object.isRequired,
    switchDetails: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    switchDetails: state.switchDetails,
    keyboard: state.keyboard
});

export default connect(mapStateToProps)(SwitchDetails);