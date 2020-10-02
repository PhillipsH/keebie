import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {filterSwitchesName} from '../flux/actions/switchesActions';
import {filterSwitchesType} from '../flux/actions/switchesActions';

class Toolbar extends React.Component{
    constructor(props){
        super(props)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleButton = this.handleButton.bind(this)
        this.linearStyle = 'toolbar-button'
        this.tactileStyle = 'toolbar-button'
        this.clickyStyle = 'toolbar-button'
        this.currentButton = ''
    }
    componentDidMount(){
    }
    handleKeyUp(e){
        this.props.filterSwitchesName(e.target.value)
    }
    handleButton(e){

        switch(e.target.value){
            case 'linear':
                if(this.currentButton == 'linear'){
                    this.props.filterSwitchesType("")
                    this.linearStyle = 'toolbar-button'
                    this.tactileStyle = 'toolbar-button'
                    this.clickyStyle = 'toolbar-button'
                    this.currentButton = ''
                }else{
                    this.props.filterSwitchesType('linear')
                    this.linearStyle = 'button-active'
                    this.tactileStyle = 'toolbar-button'
                    this.clickyStyle = 'toolbar-button'
                    this.currentButton = 'linear'
                }
                break;
            case 'tactile':
                if(this.currentButton == 'tactile'){
                    this.props.filterSwitchesType("")
                    this.linearStyle = 'toolbar-button'
                    this.tactileStyle = 'toolbar-button'
                    this.clickyStyle = 'toolbar-button'
                    this.currentButton = ''
                }else{
                    this.props.filterSwitchesType('tactile')
                    this.linearStyle = 'toolbar-button'
                    this.tactileStyle = 'button-active'
                    this.clickyStyle = 'toolbar-button'
                    this.currentButton = 'tactile'
                }
                break;
            case 'clicky':
                if(this.currentButton == 'clicky'){
                    this.props.filterSwitchesType("")
                    this.linearStyle = 'toolbar-button'
                    this.tactileStyle = 'toolbar-button'
                    this.clickyStyle = 'toolbar-button'
                    this.currentButton = ''
                }else{
                    this.props.filterSwitchesType('clicky')
                    this.linearStyle = 'toolbar-button'
                    this.tactileStyle = 'toolbar-button'
                    this.clickyStyle = 'button-active'
                    this.currentButton = 'clicky'
                }
        }

    }
    render(){
        return(
            <div id='toolbar'>
                <input type="text" placeholder='search' class='toolbar-text' onKeyUp={this.handleKeyUp}></input>
                <input type="button" value='linear' class={this.linearStyle} onClick={this.handleButton}></input>
                <input type="button" value='tactile' class={this.tactileStyle} onClick={this.handleButton}></input>
                <input type="button" value='clicky' class={this.clickyStyle} onClick={this.handleButton}></input>
            </div>
        )
    }
}

Toolbar.propTypes={
    filterSwitchesName: PropTypes.func.isRequired,
    keyboard: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    keyboard: state.keyboard,
});

export default connect(mapStateToProps, {filterSwitchesName, filterSwitchesType})(Toolbar);