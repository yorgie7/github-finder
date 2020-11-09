import React, { Component } from 'react';
import { UserStyledCard, GitHubLinkButton} from "../../styled"


const userLogin = (loginStr) => {
    return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
}

const userName = {
    margin: '5px 5px 5px 0px',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 400
}
const gitLink = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '12px'
}


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
        const { login, avatar_url, html_url } = this.props.user;


        return (
            <UserStyledCard>
                <div style={{ textAlign: 'center', marginLeft: '5px', width: '20%' }}>
                    <img src={avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                </div>

                <div style={{
                    display: 'flex', flexDirection: 'column',
                    paddingLeft: '15px', alignContent: 'center'
                }}>

                    <h2 style={userName}>{userLogin(login)}</h2>

                    <div style={{ textAlign: "center" }}>
                        <GitHubLinkButton onClick={this.toggleDialog}>Find More</GitHubLinkButton>
                    </div>
                    <GitHubLinkButton>
                        <a href={html_url} target='blank' style={gitLink}>github Link </a> 
                        </GitHubLinkButton>
                </div>
            </UserStyledCard>


        )
    }
}

export default UserItem;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
