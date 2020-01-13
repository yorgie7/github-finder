import React, { Component } from 'react';
import Navbar from '../components/common/Navbar';
import Users from '../components/usersdata/Users';
import Search from '../components/Search';
import axios from 'axios';



const clearBtn = {
  height: '20px',
  position: 'fixed', marginTop: '10px', marginLeft: '90%',
  backgroundColor: 'blue', textAlign: 'center',
  border: '1px solid blue', borderRadius: '60px',
  paddingLeft: '7px', paddingRight: '7px', color: 'white',
  cursor: 'pointer',
  fontSize: '12px'
}
class UserPage extends Component {

  state = {
    users: [],
    isLoading: false
  };


  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get(`https://api.github.com/users`);
    this.setState({ users: res.data });
    this.setState({ isLoading: false, showButton: true });
  }

  searchFunction = async text => {

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({
      users: res.data.items,
      isLoading: false
      });

  }


  render() {
    const { isLoading, users } = this.state;


    return (
      <div>
        <div style={{ overflow: 'display' }}>
            <Navbar title='GitHub App'>
                <Search searchUsers={this.searchFunction} />
            </Navbar>
        </div>

    
         <div style={{ marginTop: '25px', height: '10%' }}>

            <Users users={users} loading={isLoading} />

         </div>
      </div>
    )
  }
}
export default UserPage;


