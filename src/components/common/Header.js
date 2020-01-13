import React, { Component } from 'react';

import Navbar from './Navbar';
import Search from '../Search';

class Header extends Component {
    
    
    SearchFunction = this.props.Search;
    
    render() {

        const HeaderStyle={
        backgroundColor: 'lightgrey',
        width: '100%'};
        
        return (

            <div style={HeaderStyle}>
             <Navbar title="GitHub App"> 
             <div>
             <Search searchUsers={this.SearchFunction} />
            </div>
            </Navbar>
            </div>
        )
    }
}

export default Header;