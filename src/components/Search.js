import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        /* or text: e.target.value */

    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            alert("Please Enter Some Text.");

        }
        else {
            console.log(this.state.text);

            this.props.searchUsers(this.state.text);

            this.setState({ text: '' })
        }
    };


    render() {
        
        const inputStyle = {
            display: 'flex', flexDirection: 'row', maxWidth: '100%',
            backgroundColor: 'none', height: '25px'
        };

        const searchBox = {
            border: '1px solid blue', borderRadius: '5px', marginRight: '2px',
            paddingLeft: '5px', backgroundColor: 'white', width: '300px'
        }

        const submitButton = {
            backgroundColor: 'white', textAlign: 'center',
            border: '1px solid blue', borderRadius: '5px',
           paddingLeft:'10px',paddingRight:'10px',
            cursor: 'pointer',
            fontSize: '14px'
        }

        return (
            <div className='Search'>

                <form onSubmit={this.onSubmit} style={inputStyle}>
                    <input name='text' type='text'
                        placeholder='Search for user... '
                        value={this.state.text}
                        onChange={this.onChange} style={searchBox} />

                    <input type='submit' value='Search' style={submitButton} />
                </form>

            </div>
        )
    }
}

export default Search;
