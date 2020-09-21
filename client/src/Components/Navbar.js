import React, { Component } from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div id='navbar'>
                <h2 id='site-name'>keebie.io</h2>
                <nav>
                    <ul class = "nav-links">
                        <li><a href="#">home</a></li>
                        <li><a href="#">switches</a></li>
                        <li><a href="#">pcbs</a></li>
                        <li><a href="#">keycaps</a></li>
                    </ul>
                </nav>

            </div>
        )
    }
}
export default Navbar