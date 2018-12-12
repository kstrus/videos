import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.Component {
    render() {
        const { video } = this.props;

        if (!video) {
            return <div>Ups... Something went wrong. Try again.</div>;
        }

        return (
            <div>
                <div className="ui embed">
                    <iframe title="Youtube Video" src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                </div>
                <div className="ui segment">
                    <p className="ui header">{video.snippet.title}</p>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

VideoPlayer.propTypes = {
    video: PropTypes.object
};

export default VideoPlayer;
