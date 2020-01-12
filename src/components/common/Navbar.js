import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const linkStyle = {
  padding: '0 10px 0 10px', textDecoration: 'none'
}

const Nav = styled.div`
      background-color: lightgrey;
      display: flex;
      flex-direction:row;
      height: 2 rem;
      width:100%`;
const Title = styled.h3`
font-size: 20px;display: flex;flex-direction:row;
text-shadow: 1px 0px 0px lightgrey;
color: blue; margin:10px; font-weight: 300; margin-right: auto`;

class Navbar extends Component {

  static defaultProps = { title: 'git finder' };
  static propTypes = { title: PropTypes.string.isRequired };

  render() {

    return (
      <Nav>
        <Title>
          <div style={{ width: 'max-content', paddingRight: '20px' }}> {this.props.title} </div>

          <div style={{ display: 'flex', flexDirection: 'row', padding: '0 auto 20px 0' }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/userpage/" style={linkStyle}>Users</Link>
            <Link to="/gistpage/" style={linkStyle}>Gists</Link>
            <Link to="/aboutpage/" style={linkStyle}>About</Link>

          </div>

        </Title>

        <div style={{ marginTop: '10px' }}> {this.props.children} </div>

      </Nav>
    )
  }
}
export default Navbar;
