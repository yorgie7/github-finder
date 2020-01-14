import React, { Component } from 'react';

const flexColumn = {
    alignItems: 'center',
    display: 'flex', paddingRight: '20px',

    flexDirection: 'column', flexBasis: '200px'
}
const dateConvert = (str) => { return Date(str).substring(0 ,15);}

const limit_char = {
    margin: '10px 0 10px 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}
const userName = {
    margin: '5px 5px 5px 0px',
    textAlign: 'left',
    fontSize: '16px',
    fontWeight: 400,
}


class HomeGistCard extends Component {

    render() {
  
        const { owner, html_url, created_at, updated_at } = this.props.gist

        return (
            <div className='homeGistCard'>
                <div style={flexColumn}>
                    <img src={owner.avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                    <h4 style={userName}>{owner.login}</h4>
                </div>

                <div style={flexColumn}>
                    <a href={html_url} target='_blank' rel='noopener noreferrer'
                        style={{ alignSelf: 'baseline' }}>gist url</a>
                    <p style={limit_char}>Created at: {dateConvert(created_at)} </p>
                    <p style={limit_char}>Updated at: {dateConvert(updated_at)}</p>
                </div>

            </div>


        )
    }
}

export default HomeGistCard;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
