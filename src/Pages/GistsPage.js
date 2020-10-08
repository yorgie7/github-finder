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
        this.loadMore = this.loadMore.bind(this);
       }
   

 async componentDidMount() {
    this.setState({ isLoading: true });
    const result = await axios.get(`https://api.github.com/gists/public`);
    this.setState({ gists: result.data });

  }
 

  clearGists = () => {
    this.setState({ gists: [] });
  }

 
  loadMore() {
    this.setState({ visible: this.state.visible + 7 });
  }

  render() {
    const { gists , visible} = this.state;

    return (
      <React.Fragment>
        <Navbar title='GitHub App' />
  
                  <div style={{height:'85vh',overflow:'auto'}}>
                    {gists.slice(0, visible).map(gist => (
                      <GistItem key={gist.id} gist={gist} />
                    ))}</div>
                    
                   { this.state.gists.length > 0 && 
<div style={{textAlign:'center', paddingTop:'10px'}}>
                    <button onClick={this.loadMore}
                    className="primary-button">See More</button>
                  </div>}

                </React.Fragment>

      
    
    )
  }
}
export default GistsPage;

