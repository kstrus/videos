import React from 'react';
import PropTypes from 'prop-types';
import VideoTile from './VideoTile';

class VideoList extends React.Component {
    render() {
        const { videos, onVideoSelect } = this.props;

        const list = videos.map((video) => {
            return (
                <VideoTile
                    video={video}
                    onVideoSelect={onVideoSelect}
                    key={video.id.videoId}
                />
            );
        });

        return <div className="video_list">{list}</div>;
    }
}

VideoList.propTypes = {
    videos: PropTypes.array,
    onVideoSelect: PropTypes.func
};

export default VideoList;
