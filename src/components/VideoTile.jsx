import '../css/VideoTile.css';
import React from 'react';

class VideoTile extends React.Component {
    render() {
        const { video } = this.props;

        return (
            <div className="video_tile">
                <img className="image" src={video.snippet.thumbnails.medium.url} alt='Video thumbnail'/>
                <div className="title">{video.snippet.title}</div>
            </div>
        );
    }
}

export default VideoTile;
