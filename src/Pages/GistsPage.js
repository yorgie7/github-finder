import React, { Component } from 'react';
import Navbar from '../components/common/Navbar';
import GistItem from '../components/gists/GistItem'
import axios from 'axios';


class GistsPage extends Component {

  state = {
    gists: [],
    isLoading: false,
  
  };

 async componentDidMount() {
    this.setState({ isLoading: true });
    const result = await axios.get(`https://api.github.com/gists/public`);
    this.setState({ gists: result.data });
  
   console.log(result.data);
   console.log('Gists loaded');
  }
 


 
  clearGists = () => {
    this.setState({ gists: [] });
  }

  render() {
    const { gists } = this.state

    return (
      <div>
        <Navbar title='Public Gists' />
  
                  <div>
                    {gists.map(gist => (
                      <GistItem key={gist.id} gist={gist} />
                    ))}</div>

                </div>

      
    
    )
  }
}
export default GistsPage;

