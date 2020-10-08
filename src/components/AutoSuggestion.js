import React, { Component } from 'react';
import styled from 'styled-components';

class AutoSuggestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
         suggest_result : this.props.suggests
        }
    };


    suggestedOnclick = (suggest_login) => {

        this.props.searchUsers(suggest_login);

    }

    render() {

        return (
            

                        <div style={{ overflow: 'display', height: '10px', zIndex: '999', width: '210px' }}>

                            {this.props.data.length > 0 && (
                                <ul className='ul1-suggest'>

                                    <li>Users</li>

                                </ul>)}

                            <ul className='ul2-suggest'>

                                {
                                    this.state.suggest_result.slice(0, 7).map((suggest_result) => <li key={suggest_result.id}
                                        onClick={() => { this.suggestedOnclick(suggest_result.login) }} >

                                        {suggest_result.login}</li>)}

                            </ul>
                        </div>
                

        
        )
    }
}

export default AutoSuggestion;
