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
  constructor(props){
    super(props);

    this.state = {
      userName: this.props.user.login,
      userData: [],
      isOpen: this.props.isOpen
    };
  
    this.Update = this.Update.bind(this);
  }


  async componentDidMount() {

    const res = await fetch(`https://api.github.com/users/${this.state.userName}`)
      .then(res => res.json());

    this.setState({ userData: res });
    console.log('opened');
  };

  Update(){
    this.props.toggleDialog();
  }

  render() {
    // const Update = () => {
    //   this.setState({ isOpen: !isOpen });
    //   console.log('closed');
    // }
    const { isOpen } = this.props;


    return (
      <div>

            <div className="dialogstyle" style={dialogStyle}>


              <div className="flexbox" style={flexbox}>


                <div className='modelcontant' style={modelContent}>

                  <div style={{ textAlign: 'right', paddingTop: '10px' }}><button onClick={this.Update} >X</button></div>

                  <h3>{this.state.userData.name}</h3>
                  <p>Following : {this.state.userData.following}</p>
                  <p>Followers : {this.state.userData.followers}</p>
                  <p>Following : {this.state.userData.following}</p>



                </div>

              </div>

            </div>
      </div>



    )
  }



}


export default UserDialogue;
