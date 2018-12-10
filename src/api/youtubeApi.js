import axios from 'axios';

const KEY = 'AIzaSyDoZItQoK-sLoMhTbwhE29qtGgt66MJQ-4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: KEY
    }
});
