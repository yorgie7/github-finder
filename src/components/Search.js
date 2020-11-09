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
        }
        else {

            this.props.searchUsers(this.state.text);

            this.setState({ ...this.state, text: '', suggest: [] });
        }
    };

    suggestedOnclick = (suggest_login) => {
    
        this.setState({ text: '', suggest: [] , isSuggestOpen:false });

        this.props.searchUsers(suggest_login);
        console.log(suggest_login);
    }



    suggestFunction = async text => {

        await axios.get(`https://api.github.com/search/users?q=${text}`)
            .then( res => {
                this.setState({ suggest: res.data.items });
                  console.log(res.data)})
            .catch((error) => console.log('Error in Suggest-function'));

        console.log(this.state.suggest);
        
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


 // ( 
                //     <div style={{ overflow: 'display', height: '10px', zIndex: '999', width: '210px' }}>

                //        {this.state.suggest.length > 0 && (
                //         <ul className='ul1-suggest'>

                //             <li>Users</li>

                //         </ul>)}

                //     <ul className='ul2-suggest'>

                //         { 
                //             suggest.slice(0, 7)
                //             .map((suggest_result) => <li key={suggest_result.id}
                //                 onClick={() => { this.suggestedOnclick(suggest_result.login) }} >

                //                 {suggest_result.login}</li>)
                //         }

                //     </ul>
                // </div>
        

                  //  )