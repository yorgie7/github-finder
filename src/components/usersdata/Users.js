import React, { Component } from 'react';
import UserItem from "./UserItem";


class User extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, 
       }

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
                    {this.props.user.map(usr => (
                      <UserItem key={usr.id} user={usr} />
                    ))}
                  </div>
                      
                  <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                    <button>See More</button>
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
