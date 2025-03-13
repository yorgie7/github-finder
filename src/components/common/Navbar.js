import React, { Component } from "react";
import { Nav, Title } from "../../styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const linkStyle = {
  padding: "0 10px 0 10px",
  textDecoration: "none",
  width: "auto",
};
const titlelinkStyle = {
  padding: "0 10px 0 10px",
  textDecoration: "none",
  width: "auto",
  color: "black",
  fontWeight: "400",
};

class Navbar extends Component {
  static defaultProps = { title: "git finder" };
  static propTypes = { title: PropTypes.string.isRequired };

  render() {
    return (
      <Nav>
        <Title>
          <div style={{ width: "max-content", paddingRight: "20px" }}>
            <Link to="/" style={titlelinkStyle}>
              {this.props.title}
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0 auto 20px 0",
            }}
          >
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/userpage/" style={linkStyle}>
              Users
            </Link>
            <Link to="/gistpage/" style={linkStyle}>
              Gists
            </Link>
            <Link to="/aboutpage/" style={linkStyle}>
              About
            </Link>
          </div>
        </Title>

        <div style={{ marginTop: "10px" }}> {this.props.children} </div>
      </Nav>
    );
  }
}
export default Navbar;
