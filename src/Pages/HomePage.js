import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import HomeUserCard from '../components/usersdata/HomeUserCard';
import HomeGistCard from '../components/gists/HomeGistCard';
import UserDialogue from '../components/usersdata/UserDialogue';
import styled from "styled-components";
import Navbar from '../components/common/Navbar';
import Search from '../components/Search';

import axios from 'axios';

const headingStyle = {fontSize: '20px',
  margin: '15px 5%',
  fontWeight: '400',
};

const Loader = styled.div`
font-size: 30px;
text-align: center;
 height : 20vh;
  padding : 7vh`;

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
    const result = await axios.get(`https://api.github.com/gists/public`)
        .then(res => this.setState({ gists: res.data })).catch(e => console.log(e));
    ;

  }

  async getUsers() {
    const result = await axios.get(`https://api.github.com/users`)
      .then( res => {
         this.setState({ ...this.state, users: res.data });
      console.log(res.status)
     }).catch(e => console.log(e));

  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.getUsers();
    this.getGists();
    this.setState({ isLoading: false });
  }


  SearchFunction = async text => {
    this.setState({ isLoading: true });
    await axios.get(`https://api.github.com/search/users?q=${text}`)
    .then( res => {
      if(res.status===200){ this.setState({users: res.data.items, isLoading: false }) }
    else{ console.log('not found')}});
    
  }


  toggleDialog(dialogUser) {

    if (dialogUser === null) {
      this.setState({ dialogUser: '', isDialogOpen: !this.state.isDialogOpen });
    }
    else {
      this.setState({
        dialogUser: dialogUser,
        isDialogOpen: !this.state.isDialogOpen
      });

    }
  }

  /*- --   dialogUser is parameter passed from HomeUserCard (ie; this.props.user.login) in 
                      toggleDialog() ---//*/

  render() {

    const { isLoading, users, gists, dialogUser, isDialogOpen } = this.state;


    return (

      <>

        <Navbar title="GitHub App">

          <Search searchUsers={this.SearchFunction} />
        </Navbar>

        <Fragment>
          {
            isLoading ? (<div style = {{ textAlign: "center" }}>loading...</div>)
              :
              (
              <div className='divHideScroll'>
                
                <h3 style={headingStyle}>Github Users</h3>

                {
                  users.length > 0 ? (
                  <>
                  <div className='homeUserCard'>
                    {
                      users.slice(0, 10).map(user => (
                        <HomeUserCard key={user.id} user={user} toggleDialog={this.toggleDialog} />
                      ))}
        
                  </div>
                     <div style={{ display:'block' ,textAlign: 'center', paddingTop: '10px' }}>
                     <button><Link to="/userpage/">See More</Link></button>
                   </div>
                   </>


                  ) 
                  : 
                  (<Loader> Loading.... </Loader>)
                }



                {/* ====>  dialog box*/}
                {
                  isDialogOpen &&
                  (
                    <UserDialogue
                      user={dialogUser}
                      toggleDialog={this.toggleDialog}
                    />
                  )
                }


                <h3 style={headingStyle}>Public Gists</h3>
                
                {
                  gists.length > 0 ? (
                    <>
                <div className='gistCardAlign'>
                  {
                    gists.slice(0, 9).map(gist => (
                      <HomeGistCard key={gist.id} gist={gist} />
                    ))
                    }
                </div>

                <div style={{ textAlign: 'center', paddingTop: '10px', paddingBlockEnd: '10px' }}>
                  <button><Link to="/gistpage/">See More</Link></button>
                </div>
              </> 
              ) 
              :
               (<Loader> Loading.... </Loader>)
            }
              </div>) 
          }

        </Fragment>
      </>
    )
  }
}
export default HomePage;


