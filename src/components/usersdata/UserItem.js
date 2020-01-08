import React, { Component } from 'react';
import UserDialogue from './UserDialogue';

class UserItem extends Component {
    constructor(props) {
        super(props);

        this.toggleDialog = this.toggleDialog.bind(this);
    }

   

    toggleDialog() {

       this.props.toggleDialog(this.props.user.login);
        console.log('dialog opened in user page');
    }



    render() {
        
        const openDialog = () => this.setState({ isOpen: true });
      
        const { login, avatar_url } = this.props.user;

        const userLogin = (loginStr) => {
            return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
        }

        const userName = {
            margin: '5px 5px 5px 0px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 400
        }
        

        return (
            <div className="Card">
                <img src={avatar_url} alt='NOT FOUND' className='UsrImg' />
               
                <div>
                     <h2 style={userName}>{userLogin(login)}</h2>
                
                    <button onClick={this.toggleDialog}>Find More</button>

                   
                </div>

                   
            </div>
        )
    }
}

export default UserItem;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
