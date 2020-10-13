import React, { Component } from 'react';
import logo from '../switch.jpg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SwitchDetails extends React.Component{

    render(){
        const{details} = this.props.switchDetails
        const{switches} = this.props.keyboard
        const switchItem = switches.filter(({_id}) => _id === details);

        return(
            <div id="switch-details">
                {switchItem.map(({switchName, switchType, manufacturer, actuationForce, actuationDistance,img}) =>
                    <ul>
                        <li><div className='switch-items'><img src={require('../Assets/' + img)} style={{width:'100%'}}/></div></li>
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