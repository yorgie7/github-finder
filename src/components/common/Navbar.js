import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types'

class Navbar extends Component {

    static defaultProps = {  title: 'git finder' };
    static propTypes = { title: PropTypes.string.isRequired};

  render() {
    const Nav = styled.div`overflow: hidden;
          background-color: #385875;
          height: 50px;
          width:100%`;
    const Title = styled.h3`color: white`;

return (
   <Nav>
  <Title>
    {this.props.title} 
  </Title>
  <h1></h1>
 </Nav>
  )
}
}
export default Navbar;
