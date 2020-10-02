import React, { Component } from 'react';
import logo from '../switch.jpg';
import { connect } from 'react-redux';
import {setDetails} from '../flux/actions/switchesActions';

class SwitchItem extends React.Component{

    constructor(props){
        super(props);
    }
    showSidebar(e){
        this.props.setDetails(this.props.list_id)
    }
    render(){
        return(
            <div class='switch-items' onClick={()=>this.showSidebar()}>
                <img src={logo} width='100%' height='width'/>
                <h3>{this.props.name}</h3>
                <span>{this.props.type}</span>
            </div>
        )
    }

}


// export default connect(mapStateToProps, {getSwitches})(Board);
export default connect(null, {setDetails})(SwitchItem);
// export default (SwitchItem);                                   