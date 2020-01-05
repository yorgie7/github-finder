import React, { Component } from 'react';
import UserDialogue from './UserDialogue';
import { nominalTypeHack } from 'prop-types';

class UserCard extends Component {
    constructor(props){
        super(props);

        this.toggleDialog = this.toggleDialog.bind(this);
    }

    state = {
        isOpen: false
    }

    toggleDialog() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {

        const openDialog = () => this.setState({ isOpen: true });
        const userLogin = (loginStr)=> {
            return loginStr.toUpperCase().slice(0,1) + loginStr.slice(1);
        }
        const { login, avatar_url } = this.props.user;
        const userName = {margin: '5px',
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: 400
        }

        const buttonStyle = {
         marginTop: '5px', backgroundColor: '#7ba1ba',
         border: 'none', fontSize: '12px', color : '#fff',
         padding: '5px 12px'
        }
        console.log(this.state);
        console.log(this.props);

        return (
            <div className="homeCard">
                <img src={avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                <div style={{ display: 'flex', flexDirection: 'column',
                 paddingLeft: '25px', alignContent: 'center' }}>

                    <h2 style={userName}>{userLogin(login)}</h2>
                    <div style={{textAlign:"center"}}><button onClick={this.toggleDialog} style={buttonStyle}>Find More</button></div>
                </div>

                {
                    this.state.isOpen && (
                        <div>
                    
                        <UserDialogue 
                            user={this.props.user}
                            toggleDialog={this.toggleDialog}
                        />

                        </div>
                    )
                }


            </div>
        )
    }
}

export default UserCard;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
