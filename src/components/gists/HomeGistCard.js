import React, { Component } from 'react';
import {HomeStyledGistCard }  from "../../styled";

const flexColumn = {
    alignItems: 'center',
    display: 'flex', paddingRight: '12px',
    flexDirection: 'column', 
    flexBasis: '35%'
}
const DateConvertor = str =>  Date(str).substring(0 ,15);

const limit_char = {
    margin: '10px 0 0 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',

    fontSize:'75%'
}
const userName = {
    margin: '5px 5px 5px 0px',
    textAlign: 'left',
    fontSize: '75%',
    fontWeight: 300,
}


class HomeGistCard extends Component {

    render() {
  
        const { owner, html_url, created_at, updated_at } = this.props.gist

        return (
            <HomeStyledGistCard>
                <div style={flexColumn}>
                    <img src={owner.avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                    <h4 style={userName}>{owner.login}</h4>
                </div>

                <div style={flexColumn}>
                    <a href={html_url} target='_blank' rel='noopener noreferrer'
                        style={{ alignSelf: 'baseline' }}>gist url</a>
                    <p style={limit_char}>Created on: {DateConvertor(created_at)} </p>
                    <p style={limit_char}>Updated on: {DateConvertor(updated_at)}</p>
                </div>

            </HomeStyledGistCard>


        )
    }
}

export default HomeGistCard;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
