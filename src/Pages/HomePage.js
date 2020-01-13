import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import HomeUserCard from '../components/usersdata/HomeUserCard';
import HomeGistCard from '../components/gists/HomeGistCard';
import UserDialogue from '../components/usersdata/UserDialogue';
import axios from 'axios';


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      gists: [],
      isLoading: false,
      isDialogOpen: false,
      dialogUser: ''
    };
    this.toggleDialog = this.toggleDialog.bind(this);
  }



  async getGists() {
    const result = await axios.get(`https://api.github.com/gists/public`);
    this.setState({ gists: result.data });

    console.log(result.data);
  }

  async getUsers() {
    const result = await axios.get(`https://api.github.com/users`);
    this.setState({ users: result.data });

    console.log(result.data);
  }

  async componentDidMount() {
    this.getUsers();
    this.getGists();
    this.setState({ isLoading: false });

    console.log('home data loaded');
  }


  SearchFunction = async text => {
    this.setState({ isLoading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    console.log('data');
    this.setState({ users: res.data.items, isLoading: false });
  }


  toggleDialog(dialogUser) {

    if (dialogUser === null) {
      this.setState({ dialogUser: '', isDialogOpen: !this.state.isDialogOpen });
      console.log('bye dialog');
}
    else {
      this.setState({
        dialogUser: dialogUser,
        isDialogOpen: !this.state.isDialogOpen
      });
      console.log('hii dialog');
    }
    console.log(this.state.dialogUser);
  }

  /*- --   dialogUser is parameter passed from HomeUserCard (ie; this.props.user.login) in 
                      toggleDialog() ---//*/

  render() {

    const { isLoading, users, gists, dialogUser } = this.state;
    const headingStyle = {
      margin: '20px',
      fontWeight: '350',
  };


    return (

      <div>
        <div>
          <Header Search={this.SearchFunction} />
        </div>
        <div>
          {
            isLoading ? (
              <div style={{ textAlign: 'center' }}>
                <h2>Loading...</h2>
                Please check your connection...</div>
            ) : (
                <div className='divHideScroll'>
                  <h3 style={headingStyle}>Github Users</h3>
                  <div className='homeUserCard'>
                    {users.slice(0, 10).map(user => (
                      <HomeUserCard key={user.id} 
                      user={user} 
                      toggleDialog={this.toggleDialog} />
                    ))}
                  </div>
                  {
                    this.state.isDialogOpen && 
                      ( <div>

                        <UserDialogue
                          user={dialogUser}
                          toggleDialog={this.toggleDialog}
                        />

                      </div> )
                  }

                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                    <button><Link to="/userpage/">See More</Link></button>
                  </div>

                  <h3 style={headingStyle}>Public Gists</h3>

                  <div className='gistCardAlign'>
                    {gists.slice(0, 9).map(gist => (
                      <HomeGistCard key={gist.id} gist={gist} />
                    ))}
                  </div>
                  <div style={{ textAlign: 'center', paddingTop: '10px', paddingBlockEnd: '10px' }}>
                    <button><Link to="/gistpage/">See More</Link></button>
                  </div>
                </div>
              )
          }
        </div>


      </div>
    )
  }
}
export default HomePage;


