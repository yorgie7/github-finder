import React, { Component } from 'react';
import UserDialogue from './UserDialogue';
import { nominalTypeHack } from 'prop-types';

class HomeUserCard extends Component {
    constructor(props) {
        super(props);

        this.toggleDialog = this.toggleDialog.bind(this);
    }

    state = {
        isOpen: false,
    
    }

    toggleDialog() {

        this.props.toggleDialog(this.props.user.login);
        console.log('dialogUser name is updated in home page');
    }

    render() {


        const userLogin = (loginStr) => {
            return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
        }

        const { login, avatar_url } = this.props.user;
        const userName = {
            margin: '5px',
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: 400
        }

        const buttonStyle = {
            marginTop: '5px', backgroundColor: '#7ba1ba',
            border: 'none', fontSize: '12px', color: '#fff',
            padding: '5px 12px'
        }
      

        return (
            <div className="homeCard">
                <img src={avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    paddingLeft: '25px', alignContent: 'center'
                }}>

                    <h2 style={userName}>{userLogin(login)}</h2>
                    <div style={{ textAlign: "center" }}>

                    <button onClick={this.toggleDialog} style={buttonStyle}>Find More</button></div>
                </div>

                

            </div>
        )
    }
}

export default HomeUserCard;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
