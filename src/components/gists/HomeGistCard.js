import React, { Component } from 'react';


class HomeGistCard extends Component {

    render() {


        const flexColumn = {
            alignItems: 'center',
            display: 'flex', paddingRight: '20px',

            flexDirection: 'column', flexBasis: '255px'
        }

        const { owner, html_url, created_at, updated_at } = this.props.gist;

        const limit_char =  {
            width: '19ch',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'whitespace'
        }
       

        return (
            <div className='homeGistCard'>
                <div style={flexColumn}>
                    <img src={owner.avatar_url} alt='NOT FOUND' className='homeUsrImg' />
                    <h4 style={{ width: '9ch', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{owner.login}</h4>
                </div>

                <div style={flexColumn}>
                    <a href={html_url} target='_blank' rel='noopener noreferrer'>gist url</a>
                    <p style={limit_char}>Created at: {created_at}</p>
                    <p style={limit_char}>Updated at: {updated_at}</p>
                </div>

            </div>


        )
    }
}

export default HomeGistCard;

// we pass user not usr, usr  is state of Users's one pc
/*<a href={html_url} target='_blank' rel='noopener noreferrer'>Find More</a>*/
