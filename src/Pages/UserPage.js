import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import Users from "../components/usersdata/Users";
import Search from "../components/Search";
import axios from "axios";

class UserPage extends Component {
  state = {
    users: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get(`https://api.github.com/users`);
    this.setState({ users: res.data });
    this.setState({ isLoading: false, showButton: true });
  }

  searchFunction = async (text) => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      users: res.data.items,
      isLoading: false,
    });
  };

  render() {
    const { isLoading, users } = this.state;

    return (
      <>
        <div style={{ overflow: "display" }}>
          <Navbar title="GitHub App">
            <Search searchUsers={this.searchFunction} />
          </Navbar>
        </div>

        <div
          style={{ textAlign: "center", fontSize: "30px", marginTop: "20px" }}
        >
          Github-Users
        </div>
        <div style={{ marginTop: "25px", height: "20%" }}>
          <Users users={users} loading={isLoading} />
        </div>
      </>
    );
  }
}
export default UserPage;
