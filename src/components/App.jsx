import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtubeApi from '../api/youtubeApi';

class App extends React.Component {
    state = { videos: [] };

    onSearchSubmit = (query) => {
        youtubeApi.get('/search', {
            params: {
                part: 'snippet',
                q: query
            }
        }).then((response) => {
            this.setState({ videos: response.data.items });
        })
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
