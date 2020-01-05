import React, { Component } from 'react';
import UserDialogue from './UserDialogue';

class UserItem extends Component {

    state = {
        isOpen: false
         }
 
  

    render() {
        
        const openDialog = () => this.setState({ isOpen: true });
      
        const { login, avatar_url } = this.props.user;


        return (
            <div className="Card">
                <img src={avatar_url} alt='NOT FOUND' className='UsrImg' />
                       <h3>{login}</h3>

                <div>
                    <button onClick={openDialog}>Find More</button>
                    {
                        this.state.isOpen && ( 
                        <UserDialogue user={this.props.user} 
                            isOpen={this.state.isOpen}
                             />
                          )
                    }
                </div>

            </div>
        )
    }
}

export default UserItem;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
