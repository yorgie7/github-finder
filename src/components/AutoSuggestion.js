import React, { Component } from 'react';
import {SuggestBlock} from '../styled';

class AutoSuggestion extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         suggest_result : this.props.suggests,
         
        }
    };
    render() {
        const { suggests } = this.props;
        return (
                          <SuggestBlock>
                            {this.props.suggests.length > 0 && (
                                <ul className='ul1-suggest'>
                                    <li>Users</li>
                                </ul>)}
                            <ul className='ul2-suggest'>  
                                 {
                                    suggests.slice(0, 7).map((suggest_result) => <li key={suggest_result.id}
                                        onClick={() => { this.props.searchUsers(suggest_result.login) }} >
                                        {suggest_result.login}</li>)
                                }
                            </ul>
                        </SuggestBlock>
        )
    }
}

export default AutoSuggestion;
