import React, { Component } from 'react';
import UserItem from "./UserItem";


class User extends Component {
  state = { isOpen: false }

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
                    {this.props.user.map(usr => (
                      <UserItem key={usr.id} user={usr} />
                    ))}</div>

                </div>
              )
          }
        </div>
      </div>
    )
  }
}

export default User;
