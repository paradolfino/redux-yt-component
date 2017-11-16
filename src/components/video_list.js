import React, { Component } from "react";
import VideoListItem from "./video_list_item";

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.dispatcher = this.dispatcher.bind(this);
  }

  dispatcher(signal,value) {

    console.log(
      "component " +
        this._reactInternalInstance.getName() +
        " sent: " +
        signal +
        " for " +
        value
    );
    this.props.executor(signal, value);
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.map((video) => {
          return <VideoListItem
          onVideoSelect={this.props.onVideoSelect} 
          key={video.etag} 
          video={video}
          dispatcher={this.dispatcher} />;
        })}
      </ul>
    );
  }
}

export default VideoList;
