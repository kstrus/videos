import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import youtubeApi from '../api/youtubeApi';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    onSearchSubmit = (query) => {
        youtubeApi.get('/search', {
            params: {
                q: query
            }
        }).then((response) => {
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
        })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

    render() {
        const content = this.state.videos.length ? (
            <div className="ui grid">
                <div className="eight wide column">
                    <VideoPlayer video={this.state.selectedVideo} />
                </div>
                <div className="eight wide column">
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                </div>
            </div>
        ) : '';


        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                { content }
            </div>
        );
    }
}

export default App;
