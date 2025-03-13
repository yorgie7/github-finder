import React, { Component } from 'react';
import axios from 'axios';
import { SearchBar, SearchInput} from '../styled';
import AutoSuggestion from './AutoSuggestion';

const inputStyle = {
    display: 'flex', flexDirection: 'row', maxWidth: '100%',
    backgroundColor: 'none', height: '25px'
};

const submitButton = {
     height:'32px',
     margin:'-3px 10px 0px 2px',
     backgroundColor: 'white',
     textAlign: 'center',
     border: '1px solid blue', 
     borderRadius: '5px',
     padding: '7px 10px 5px 10px',
     cursor: 'pointer',
     color: 'blue',
     fontWeight: '200',
     fontSize: '16px'
}



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            suggest: [],
            isSuggestOpen: false
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            alert("Please Enter Some Text.");
            return 
        }
        else {
            this.props.searchUsers(this.state.text);
            this.setState({ ...this.state, text: '', suggest: [] });
        }
    };

    suggestedOnclick = (suggest_login) => {
        this.setState({ text: '', suggest: [] , isSuggestOpen:false });
        this.props.searchUsers(suggest_login);
    }



    suggestFunction = async text => {
        await axios.get(`https://api.github.com/search/users?q=${text}`)
            .then( res => {
                this.setState({ suggest: res.data.items });
                  console.log(res.data)})
            .catch((error) => console.warn('Error in Suggest-function'));
    }
     onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value === '') {
            this.setState({ suggest: [], isSuggestOpen: false });
          } 
        else {
            this.setState({ isSuggestOpen: true });
            this.suggestFunction(e.target.value);
        }
    }

    render() {
        const { suggest } = this.state;
        return (
            <SearchBar>
                <form onSubmit={this.onSubmit} style={inputStyle}>
                    <SearchInput name='text' type='text' placeholder='Search for user... '
                        value={this.state.text} autoComplete='off'
                        onChange={this.onChange} />
                    <input type='submit' value='Search' style={submitButton} />
                </form>
                {
                    this.state.isSuggestOpen && 
                    <AutoSuggestion suggests={suggest} searchUsers={this.suggestedOnclick}/>        
                }
            </SearchBar>
        )
    }
}

export default Search;


                //     </ul>
                // </div>
        

                  //  )
