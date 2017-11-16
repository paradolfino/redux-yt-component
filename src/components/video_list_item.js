import React, { Component } from "react";

class VideoListItem extends Component {
  constructor(props) {
    super(props);

    this.video = this.props.video;
    this.onVideoSelect = this.props.onVideoSelect;
    this.imageUrl = this.video.snippet.thumbnails.default.url;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {


    //dispatcher system by Viktharien Volander
    let signal = `SIGNAL_SEND`;
    let value = this.props.video; //set value to whatever value you're sending with the signal
    console.log(
      "component " +
        this._reactInternalInstance.getName() +
        " sent: " +
        signal +
        " for " +
        value
    );
    this.props.dispatcher(signal, value);
  }

  render() {
    return (
      <li
        onClick={this.handleClick}
        key={this.props.key}
        className="list-group-item"
      >
        <div className="video-list media">
          <div className="media-left">
            <img src={this.imageUrl} className="media-object" />
          </div>

          <div className="media-body">
            <div className="media-headiing">{this.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
