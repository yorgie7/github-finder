import React, { Component } from 'react';


class GistItem extends Component {



    render() {
        const ownerLogin = (loginStr) => {
            return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
           }

        const flexColumn = {
            alignItems: 'center',
            display: 'flex', paddingRight: '20px',
            flexDirection: 'column', flexBasis : '250px'
        }

        const { owner, html_url, description, created_at, updated_at } = this.props.gist;


        return (
            <div className='GistCard'>
                <div style={flexColumn}>
                    <img src={owner.avatar_url} alt='NOT FOUND' className='UsrImg' />
                    <h4>{ownerLogin(owner.login)}</h4>
                </div>
               
                <div style={flexColumn}>
    
                    <a href={html_url} target='_blank' rel='noopener noreferrer'>gist url</a>
                    <p>Created at: {created_at}</p>
                    <p>Updated at: {updated_at}</p>
                </div>
                <div style={flexColumn}>
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
