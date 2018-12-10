import React from 'react';

class VideoTile extends React.Component {
    render() {
        const video = this.props.video;

        return (
            <div className="item">
                <div className="image">
                    <img src={video.snippet.thumbnails.medium.url} alt='video thumbnail'/>
                </div>
                <div className="content">
                    <div className="description">{video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoTile;
