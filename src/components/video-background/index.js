import React, { Component } from 'react';
import VideoCover from 'react-video-cover';
import './index.scss';

class MinimalCover extends Component {
  componentDidMount() {
    this.videoRef.muted = true;
    this.videoRef.loop = true;
    this.videoRef.play();
  }

  render() {
    const { path, position } = this.props;
    let videoPath = process.env.PUBLIC_URL + path;
    const videoOptions = {
      src: videoPath,
      ref: videoRef => {
        this.videoRef = videoRef;
      },
      onClick: () => {},
      title: 'Awesome display of colorful dust balls'
    };
    return (
      <div
        className="video-background"
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          position: position ? position : ''
        }}
      >
        <VideoCover videoOptions={videoOptions} />
      </div>
    );
  }
}

export default MinimalCover;
