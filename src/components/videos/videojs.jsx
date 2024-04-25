import React, {Component} from 'react';
import './videojs.css';
import videojs from 'video.js';

class VideoJSPlayerComponent extends Component {

    player;
    videoNode;
    videoJsOptions = {
        autoplay: false,
        muted: false,
        height: 450,
        width: 800,
        controls: true,
        sources: [
            {
                src: this.props.video,
                type: "video/mp4"
            }
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            playedSeconds: 0,
            remainingVideoPlay: 0,
            totalDuration: 0
        };

    }

    componentDidMount() {
        this.player = videojs(this.videoNode, this.videoJsOptions, () => {
            if (this.player) {

                // Triggered
                console.log('onPlayerReady');

                this.player.on('play', (event) => {
                    this.setState({
                        isPlaying: true,
                    })
                })
                this.player.on('loadedmetadata', (event) => {
                    // @ts-ignore
                    this.setState({totalDuration: this.player.duration()})
                })
                this.player.on('pause', (event) => {
                    this.setState({
                        isPlaying: false,
                    })
                })
                this.player.on('ended', (event) => {
                    console.log("ended")
                })
                this.player.on('timeupdate', (event) => {
                    // @ts-ignore
                    this.setState({playedSeconds: this.player.currentTime()})
                    // @ts-ignore
                    this.setState({remainingVideoPlay: this.player.remainingTime()})
                })

            }
        });
    }

    play = () => {
        if (this.player) {
            this.player.play();
        }
    }

    pause = () => {
        if (this.player) {
            this.player.pause();
        }
    }

    forwardVideo = () => {
        if (this.player) {
            this.player.currentTime(this.player.currentTime() + 10);
        }
    }

    backwardVideo = () => {
        if (this.player) {
            this.player.currentTime(this.player.currentTime() - 10);
        }
    }

    jumpTo = () => {
        if (this.player) {
            this.player.currentTime(55);
        }
    }

    togglePlay = () => {
        if (this.state.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    secondsToHms = (secs) => {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60) % 60;
        let seconds = Math.floor(secs % 60);
        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    };
    
    render() {
        return (
            <div className="customVideoPlayer">
                <div className="playerWrapper" data-vjs-player>
                    <video id='video' ref={node => (this.videoNode = node)} className="video-js" style={{backgroundColor:this.props.cor_background}}/>
                </div>
                <hr/>
            </div>
        );
    }
}

export default VideoJSPlayerComponent;