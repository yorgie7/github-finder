import React, { Component } from 'react';

const dialogStyle = {
  bottom: '0px',
  top: '0px',
  right: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: '99',
  backgroundColor: 'rgb(0,0,0, 0.4)',
  borderRadius: '10px',
  minWidth: '40%'
}
const gitLink = {
  color: 'blue',
  padding: '0 13px 5px 13px',
  textDecoration: 'none',
  fontSize: '14px'
}
const gitLinkButton = {
  margin: '5px 10px 5px 10px', backgroundColor: 'lightgrey',
  width: 'max-content', textAlign: 'center',
  border: '1px solid rgb(125,160,185)'
}

const flexbox = {
  display: 'flex', alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
}

const modelContent = {
  minWidth: 'fit-content',
  border: '1px solid grey',
  borderRadius: '10px',
  margin: 'auto',
  padding: '10px',
  width: '40%',
  height: '42vh',
  backgroundColor: 'white',
}
const closeButton = {
  width: '30px',
  height: '30px',
  border: '1px solid rgb(215, 215, 280)',
  borderRadius: '50%',
  backgroundColor: 'rgb(215, 215, 280)',
  fontSize: 'x-large',
  textDecoration: 'none',
  hover: {
    backgroundColor: "#ff0000",
    color: "#ffffff"
  }
}


class UserDialogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.user,
      userData: []
    };

    console.log(this.state.userName)
    this.Update = this.Update.bind(this);
  }


  async componentDidMount() {

    const result = await fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json());
    console.log(this.state.userName);
    this.setState({ userData: result });

  };

  Update() {
    this.props.toggleDialog(null);
  }

  render() {
    const { name, avatar_url } = this.state.userData;

    return (

      <div className="dialogstyle" style={dialogStyle}>

        <div className="flexbox" style={flexbox}>

          <div className='modelcontant' style={modelContent}>

            <div style={{ textAlign: 'right', paddingTop: '0px' }}>
              <button onClick={this.Update} style={closeButton} >X</button>
            </div>

            <div style={{ padding: '0 15px 15px 15px', alignItems: 'center' }}>
              <h3 style={{
                padding: '0 0 10px 0', margin: '0px',
                fontFamily: 'inherit', fontSize: 'initial', fontWeight: '400'
              }}>{name}</h3>

              <div style={{ textAlign: 'center', marginLeft: '5px', width: 'auto', height: '21vh' }}>
                <img src={avatar_url} alt='NOT FOUND' className='divUsrImg' style={{ height: 'inherit' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2vh' }}>
                <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px' }}>
                  <h3 style={{
                    margin: '1px', textAlign: 'center',
                    fontSize: '3vh', fontWeight: '400'
                  }}>
                    {this.state.userData.following}
                  </h3>
                  <p style={{ margin: '0px', fontSize: 'small' }}>followers</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                  <h3 style={{ margin: '1px', textAlign: 'center', fontSize: '3vh', fontWeight: '400' }}>

                    {this.state.userData.followers}
                  </h3>

                  <p style={{ margin: '0px', fontSize: 'small' }}> following </p>
                </div>
                <div style={gitLinkButton}>
                  <a href={this.state.userData.html_url} target='blank' style={gitLink}>github Link </a> </div>

              </div>

            </div>


          </div>

        </div>

      </div>




    )
  }



}


export default UserDialogue;
