import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: 'AIzaSyDoZItQoK-sLoMhTbwhE29qtGgt66MJQ-4',
        part: 'snippet',
        maxResults: 5
    }
});
