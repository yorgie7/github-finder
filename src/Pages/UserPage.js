import React, { Component } from 'react';
import Navbar from '../components/common/Navbar';
import Users from '../components/usersdata/Users';
import Search from '../components/Search';

import axios from 'axios';


class UserPage extends Component {

  state = {
    users: [],
    isLoading: false,
    showButton: true
  };

 async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get(`https://api.github.com/users`);
    this.setState({ users: res.data });
    this.setState({ isLoading: false });
   console.log('hiii');
  }
 


  searchFunction = async text => {

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({
      users: res.data.items,
      isLoading: false, showButton : true
    });

 


  }
  clearUsers = () => {
    this.setState({ users: [],showButton: false });
  }

  render() {
    const { isLoading, users } = this.state

    return (
      <div>
        <Navbar title='git-hub Users' />
        <Search searchUsers={this.searchFunction} />
  
  {
         this.state.showButton ? (<button onClick={this.clearUsers} style={{ Display: 'flex', marginLeft: '48%'}}>
                    Clear Search
  </button>) : (<div style={{textAlign: 'center'}}>Type a keyword to search user... </div>)
  }
        <div>

          <Users user={users} loading={isLoading} />

        </div>
      </div>
    )
  }
}
export default UserPage;


