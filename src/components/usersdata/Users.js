import React, { Component } from 'react';
import UserItem from "./UserItem";
import UserDialogue from './UserDialogue';

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: this.props.users,
      isOpen: false,
      visible: 12,
      hasMore: true,

      isDialogOpen: false,
      dialogUser: ''
    }
    this.loadMore = this.loadMore.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
  }



  loadMore() {
    this.setState({ visible: this.state.visible + 12 });
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


  render() {

      return (
        <div>
          <div>
            {
              this.props.loading ? (
                <div style={{ textAlign: 'center' }}>
                  <h2>Loading...</h2>
                  Please check your connection...</div>
              ) : (
                  <div>
                    <div className='UserCard'>
                      {this.props.users.slice(0, this.state.visible).map(usr => (
                        <UserItem key={usr.id} user={usr} toggleDialog={this.toggleDialog} />
                      ))}
                    </div>


                  {
                    this.props.users.length > 0 && (<div style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <button onClick={this.loadMore}>See More</button>
                    </div>)
                   }

                  {
                    this.state.isDialogOpen &&
                    (<div>
                      <UserDialogue
                         user={this.state.dialogUser}
                         toggleDialog={this.toggleDialog} />
                      </div>)
                  }

                </div>
              )
          }
        </div>
      </div>
    )
  }
}

export default User;
