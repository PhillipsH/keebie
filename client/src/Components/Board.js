import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwitchDetails from './SwitchDetails'
import SwitchItem from './SwitchItem';
import Toolbar from './Toolbar';
import {getSwitches} from '../flux/actions/switchesActions';
import PropTypes from 'prop-types';

class Board extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getSwitches();
    }
    render(){
        const{currentSwitches} = this.props.keyboard
        // console.log("switchITEM:" + switchItem)
        return(
            <div id='main-board'>
                <SwitchDetails></SwitchDetails>
                <div id='product-board'>
                    <Toolbar></Toolbar>
                    <div id='switch-container'>
                        {currentSwitches.map(({_id, switchName, switchType, img}) =>
                        <SwitchItem key={_id} list_id={_id} name={switchName.toLowerCase()} type={switchType.toLowerCase()} img={require('../Assets/' + img)}></SwitchItem>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

Board.propTypes={
    getSwitches: PropTypes.func.isRequired,
    keyboard: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    keyboard: state.keyboard,
});

export default connect(mapStateToProps, {getSwitches})(Board);