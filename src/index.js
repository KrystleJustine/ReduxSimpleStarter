import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBX9IkMra1VBshRAohjbsY8BR_CIudPsbw';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component
// This component should produce some html

class App extends Component {
  constructor(props){
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'whale'}, (videos) => {
        this.setState({ videos });
      })
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos= {this.state.videos} />
        </div>
    );
  }
}


// Take this component's generated HTML and put it on the page
// (in the DOM)
ReactDOM.render(<App/ >, document.querySelector('.container'));
