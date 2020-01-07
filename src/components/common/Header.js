import React, { Component } from 'react';

import Navbar from './Navbar';
import Search from '../Search';

class Header extends Component {
    
    
    SearchFunction = this.props.Search;

    render() {

        const HeaderStyle={backgroundColor: '#E5E5E5',paddingBottom:'20px',width: '100%'};
        
        return (

            <div style={HeaderStyle}>
             <Navbar title="GitHub-Finder" /> 
             <div>
             <Search searchUsers={this.SearchFunction} />
            </div>
            </div>
        )
    }
}

export default Header;