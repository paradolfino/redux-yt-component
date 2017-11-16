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

    YTSearch({ key: API_KEY, term: "lost_pause" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log(this.state.videos);
    });

    this.executor = this.executor.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
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

  render() {
    return (
      <div>
        <SearchBar />
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
