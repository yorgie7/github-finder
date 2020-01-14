import React, { Component } from 'react';



const flexColumn1 = {
    alignItems: 'center',
    display: 'flex', paddingRight: '20px',
    flexDirection: 'column', flexBasis : '200px'
}
const flexColumn2 = {
    alignItems: 'center',
    display: 'flex', paddingRight: '20px',
    flexDirection: 'column', flexBasis : '250px'
}
const flexColumn3 = {
    alignItems: 'center',
    display: 'flex', paddingRight: '20px', marginLeft:'auto',
    flexDirection: 'column', flexBasis : '250px'
}

const ownerLogin = (loginStr) => {
    return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
   }
   const userName = {
    margin: '5px 5px 5px 0px',
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: 400
}

const dateConvert = (str) => { return Date(str).substring(0 ,15);}

class GistItem extends Component {

    render() {
        

        const { owner, html_url, description, created_at, updated_at } = this.props.gist;


        return (
            <div className='GistCard'>

                <div style={flexColumn1}>
                    <img src={owner.avatar_url} alt='NOT FOUND' className='gistUsrImg' />
                    <h4 style={userName}>{ownerLogin(owner.login)}</h4>
                </div>
               
                <div style={flexColumn2}>
    
                    <a href={html_url} target='_blank' rel='noopener noreferrer'
                        style={{alignSelf:'baseline',fontWeight:'300'}}>gist-url</a>
                    <p>Created at: {dateConvert(created_at)}</p>
                    <p>Updated at: {dateConvert(updated_at)}</p>
                </div>
                <div style={flexColumn3}>
                    <h4>Description:</h4>
                    <p>{description}</p>
                </div>

            </div>
        )
    }
}

export default GistItem;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
