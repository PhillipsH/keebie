import React, { Component } from 'react';
import SwitchDetails from './SwitchDetails'
import SwitchItem from './SwitchItem';

class Board extends React.Component{
    render(){
        return(
            <div id='main-board'>
                <SwitchDetails></SwitchDetails>
                <div id='product-board'>
                    <form id='toolbar'>
                        <input type="text" value='search' class='toolbar-text'></input>
                        <input type="button" value='linear' class='toolbar-button'></input>
                        <input type="button" value='tactile' class='toolbar-button'></input>
                        <input type="button" value='clicky' class='toolbar-button'></input>
                    </form>
                    <div id='switch-container'>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                        <SwitchItem></SwitchItem>
                    </div>
                </div>
            </div>
        )
    }
}
export default Board