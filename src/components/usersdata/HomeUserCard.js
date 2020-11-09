import React, { Component } from 'react';
import { HomeUserStyledCard } from "../../styled";
//import { PropTypes } from 'prop-types';

const userLogin = (loginStr) => {
    return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
}

const buttonStyle = {
    marginTop: '5px', backgroundColor: '5F9EAO',
    border: '1px solid #7ba1ba',
    padding: '2px 5px', fontSize:'12px',fontWeight:'300',color: 'blue'
    
}

const userName = {
    margin: '5px 5px 5px 0px',
    textAlign: 'left',
    fontSize: '90%',
    fontWeight: 400
}

class HomeUserCard extends Component {
    constructor(props) {
        super(props);

        this.toggleDialog = this.toggleDialog.bind(this);
    }


    toggleDialog() {

        this.props.toggleDialog(this.props.user.login);
        console.log('dialogUser name is updated in home page');
    }

    render() {


     
        const { login, avatar_url } = this.props.user;

       
      
        return (
            <HomeUserStyledCard>
                <img src={avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    paddingLeft: '25px', alignContent: 'center'
                }}>
  
                   <h2 style={userName}>{userLogin(login)}</h2>

                    <div style={{ textAlign: "left" }}>
                    <button style={buttonStyle} onClick={this.toggleDialog}>Find More</button></div>
                </div>

                

            </HomeUserStyledCard>
        )
    }
}

export default HomeUserCard;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
