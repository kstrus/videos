import '../css/VideoTile.css';
import React from 'react';
import PropTypes from 'prop-types';

class VideoTile extends React.Component {
    render() {
        const { video, onVideoSelect } = this.props;

        return (
            <div className="video_tile" onClick={() => onVideoSelect(this.props.video)}>
                <img className="image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <div className="title">{video.snippet.title}</div>
            </div>
        );
    }
}

VideoTile.propTypes = {
    video: PropTypes.object,
    onVideoSelect: PropTypes.func
};

export default VideoTile;
