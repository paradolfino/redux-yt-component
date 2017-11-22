import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import config from './config';

const API_KEY = config.key;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };



    this.videoSearch("pewdiepie");

    this.executor = this.executor.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
  }

  executor(signal, value) {
    switch (signal) {
      case "SIGNAL_SEND":
        !value === undefined ? console.log("failed") : this.handleSelectVideo(value);
        console.log("executing " + signal);
        break;
    }
  }

  handleSelectVideo(video) {
    this.setState({ selectedVideo: video });
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log(this.state.videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          executor={this.executor}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
