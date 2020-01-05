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
            borderRadius: '10px', backgroundColor: 'none'
        };

        const searchBox = {
            height: '25px', border: 'none',
            paddingLeft: '5px', backgroundColor: '#dae0ce'
        }

        return (
            <div className='Search'>

                <form onSubmit={this.onSubmit} style={inputStyle}>
                    <input name='text' type='text'
                        placeholder=' Search for user... '
                        value={this.state.text}
                        onChange={this.onChange} style={searchBox} />

                    <input type='submit' value='Search' />
                </form>

            </div>
        )
    }
}

export default Search;
