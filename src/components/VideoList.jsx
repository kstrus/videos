import React from 'react';
import VideoTile from './VideoTile';

class VideoList extends React.Component {
    render() {
        const list = this.props.videos.map((video) => {
            return <VideoTile video={video}/>;
        });

        return <div className="video_list">{list}</div>;
    }
}

export default VideoList;
