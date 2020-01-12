import React, { Component } from 'react';
import axios from 'axios';


const inputStyle = {
    display: 'flex', flexDirection: 'row', maxWidth: '100%',
    backgroundColor: 'none', height: '25px'
};

const searchBox = {
    border: '1px solid blue', borderRadius: '5px', marginRight: '2px',
    paddingLeft: '5px', backgroundColor: 'white', width: '200px'
}

const submitButton = {
    backgroundColor: 'white', textAlign: 'center',
    border: '1px solid blue', borderRadius: '5px',
    paddingLeft: '10px', paddingRight: '10px',
    cursor: 'pointer', color: 'blue', fontWeight: '200'
    , fontSize: '14px'
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

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value === '') {
            this.setState({ suggest: [], isSuggestOpen: false })
        } else {
            this.setState({isSuggestOpen: true});
            this.suggestFunction(e.target.value);
        }


    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            alert("Please Enter Some Text.");

        }
        else {

            this.props.searchUsers(this.state.text);

            this.setState({ text: '' })
        }
    };

    suggestFunction = async text => {

        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);


        console.log(res.data.items);
        this.setState({ suggest: res.data.items});

    }

    suggestedOnclick = (p) => {

        this.setState({ text: p , isSuggestOpen : false});
        console.log(p)
        this.props.searchUsers(this.state.text);

    }


    render() {

       

        return (
            <div className='Search'>

                <form onSubmit={this.onSubmit} style={inputStyle}>
                    <input name='text' type='text'
                        placeholder='Search for user... '
                        value={this.state.text} autoComplete='off'
                        onChange={this.onChange} style={searchBox} />

                    <input type='submit' value='Search' style={submitButton} />
                </form>


                {  this.state.isSuggestOpen &&
                    (<div style={{ overflow: 'display', height: '10px', zIndex: '999', width: '210px' }}>

                        {this.state.suggest.length > 0 && (
                            <ul className='ul1-suggest'>

                                <li>Users</li>

                            </ul>)}

                        <ul className='ul2-suggest'>

                            {this.state.suggest.slice(0, 7).map((suggest_result) => <li key={suggest_result.id}
                                onClick={() => { this.suggestedOnclick(suggest_result.login) }} >

                                {suggest_result.login}</li>)}

                        </ul>
                    </div>)
                }

            </div>
        )
    }
}

export default Search;
