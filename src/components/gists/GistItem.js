import React, { Component } from 'react';



const flexColumn1 = {
    alignItems: 'center',
    display: 'flex', paddingRight: '20px',
    flexDirection: 'column', flexBasis: '200px'
}
const flexColumn2 = {
    alignItems: 'center',
    display: 'flex', paddingRight: '20px',
    flexDirection: 'column', flexBasis: '250px'
}
const flexColumn3 = {
    alignItems: 'left', height: '18vh',
    display: 'flex', paddingRight: '20px', marginLeft: 'auto',
    flexDirection: 'column', flexBasis: '250px'
}
const para1 = {
    margin: '5px',
    fontSize: '2vh',
    fontWeight: '200'
}

const para2 = {
    margin: '5px',
    fontSize: '13px',
    fontWeight: '400'
}


const ownerLogin = (loginStr) => {
    return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
}

const userName = {
    margin: '5px 5px 5px 0px',
    textAlign: 'left',
    fontSize: '15px',
    fontWeight: 400
}

const dateConvert = (str) => { return Date(str).substring(0, 15); }

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
                    <div>
                        <a href={html_url} target='_blank' rel='noopener noreferrer'
                            style={{ alignSelf: 'baseline', fontWeight: '300' }}>gist-url</a>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', height: '15vh' }}>

                        <div style={{ textAlign: 'center', margin: 'auto 15px 0 0' }}>
                            <p style={para1}>Created on: </p>
                            <p style={para2}>{dateConvert(created_at)}</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                            <p style={para1}>Updated on: </p>
                            <p style={para2}>{dateConvert(updated_at)}</p>
                        </div>
                    </div>
                </div>
                <div style={flexColumn3}>
                    <h4 style={{ margin: '0 0 0 0',
                     fontWeight: '400',
                      fontSize: '3vh' }}>
                          Description:</h4>

                    <p style={{
                        margin: '10px 0 10px 0', fontSize: '2vh',
                        overflow: 'auto', fontWeight: '300'
                    }}>
                        {description}
                    </p>

                </div>

            </div>
        )
    }
}

export default GistItem;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
