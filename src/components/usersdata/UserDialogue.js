import React, { Component } from 'react';

const dialogStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  bottom: '0px',
  top: '0px',
  right: '0px',
  left: '0px',
  zIndex: '99',
  backgroundColor: 'rgb(0,0,0, 0.4)',
  borderRadius: '9px',
}

const flexbox = {
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  width: '100%', height: '100%'
}

const modelContent = {
  backgroundColor: '#fefefe',
  margin: 'auto',
  padding: 20,
  width: 200
}


class UserDialogue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.user,
      userData: [],
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


    return (
      <div>

        <div className="dialogstyle" style={dialogStyle}>


          <div className="flexbox" style={flexbox}>


            <div className='modelcontant' style={modelContent}>

              <div style={{ textAlign: 'right', paddingTop: '10px' }}><button onClick={this.Update} >X</button></div>

              <h3>{this.state.userData.name}</h3>
              <p>Following : {this.state.userData.following}</p>
              <p>Followers : {this.state.userData.followers}</p>



            </div>

          </div>

        </div>
      </div>



    )
  }



}


export default UserDialogue;
