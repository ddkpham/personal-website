import React, {Component} from 'react';
import VideoCover from 'react-video-cover';
import './index.scss'
class MinimalCover extends Component {

    componentDidMount(){
      this.videoRef.muted = true;
      this.videoRef.loop = true;
      this.videoRef.play();
    }

    render() {
      let videoPath = process.env.PUBLIC_URL + '/ink.mp4'
      const videoOptions = {
        src: videoPath,
        ref: videoRef => {
          this.videoRef = videoRef;
        },
        onClick: () => {
          // disable pausing for now
          // if (this.videoRef && this.videoRef.paused) {
          //   this.videoRef.play();
          // } else if (this.videoRef) {
          //   this.videoRef.pause();
          // }
        },
        title: 'click to play/pause',
      };
      return (
        <div 
        className="video-background"
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          position: 'fixed',
        }}>
            <VideoCover
                videoOptions={videoOptions}
            />
        </div>
      );
    }
  }

export default MinimalCover;