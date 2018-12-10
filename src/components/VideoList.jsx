import React from 'react';
import VideoTile from './VideoTile';

class VideoList extends React.Component {
    render() {
        const list = this.props.videos.map((video) => {
            return (
                <VideoTile
                    key={video.id.videoId}
                    video={video}
                />
            );
        });

        return <div className="ui divided items">{list}</div>;
    }
}

export default VideoList;
