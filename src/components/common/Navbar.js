import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types'

class Navbar extends Component {

    static defaultProps = {  title: 'git finder' };
    static propTypes = { title: PropTypes.string.isRequired};

  render() {
    const Nav = styled.div`
          background-color: #E5E5E5;display: flex;flex-direction:row;
          height: 2 rem;
          width:100%`;
    const Title = styled.h3`font-size: 20px;
    text-shadow: 1px 0px 0px lightgrey;
    color: blue; margin:10px; font-weight: 400`;

return (
   <Nav>
  <Title>
    {this.props.title} 
  </Title>
  
  </Nav>
  )
}
}
export default Navbar;
