import React, { Component } from 'react';


const buttonStyle = {
    margin: '5px 0 5px 0',
    border: '1px solid #7ba1ba',
    padding: '2px 5px', fontSize: '12px', fontWeight: '300',
    color: 'white',
    backgroundColor: 'cornflowerblue'
}

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
    backgroundColor: 'cornflowerblue',
    
    textDecoration: 'none',
    fontSize: '14px'
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
            <div className="homeCard">
                <div style={{ textAlign: 'center', marginLeft: '5px', width: '20%' }}>
                    <img src={avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                </div>

                <div style={{
                    display: 'flex', flexDirection: 'column',
                    paddingLeft: '15px', alignContent: 'center'
                }}>

                    <h2 style={userName}>{userLogin(login)}</h2>

                    <div style={{ textAlign: "center" }}>
                        <button style={buttonStyle} onClick={this.toggleDialog}>Find More</button>
                    </div>
                    <button style={buttonStyle}>
                        <a href={html_url} target='blank' style={gitLink}>github Link </a> 
                        </button>
                </div>
            </div>


        )
    }
}

export default UserItem;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
