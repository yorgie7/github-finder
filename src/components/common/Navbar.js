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
    const Title = styled.h3`color: white;margin:5px`;

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
