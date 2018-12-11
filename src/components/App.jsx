import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
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
            this.setState({ videos: response.data.items });
        })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
        );
    }
}

export default App;
