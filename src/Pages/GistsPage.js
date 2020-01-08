import React, { Component } from 'react';
import Navbar from '../components/common/Navbar';
import GistItem from '../components/gists/GistItem'
import axios from 'axios';


class GistsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      gists: [],
      isLoading: false,
      visible: 7,
      hasMore: true
       }
       this.loadMore = this.loadMore.bind(this)
}
   

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


  loadMore() {
    this.setState({visible: this.state.visible + 7});
  }

  render() {
    const { gists } = this.state

    return (
      <div>
        <Navbar title='Public Gists' />
  
                  <div>
                    {gists.slice(0, this.state.visible).map(gist => (
                      <GistItem key={gist.id} gist={gist} />
                    ))}</div>

                <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                    <button onClick={this.loadMore}>See More</button>
                  </div>

                </div>

      
    
    )
  }
}
export default GistsPage;

