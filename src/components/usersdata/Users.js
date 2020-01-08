import React, { Component } from 'react';
import UserItem from "./UserItem";


class User extends Component {

  constructor(props) {
    super(props);

    this.state = { 
       users: this.props.users,
      isOpen: false, 
      visible: 12
       }
       this.loadMore = this.loadMore.bind(this)
}

loadMore() {
  this.setState({visible: this.state.visible +12})
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
                    {this.props.users.slice(0,this.state.visible).map(usr => (
                      <UserItem key={usr.id} user={usr} />
                    ))}
                  </div>
                      
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                    <button onClick={this.loadMore}>See More</button>
                  </div>

                </div>
              )
          }
        </div>
      </div>
    )
  }
}

export default User;
