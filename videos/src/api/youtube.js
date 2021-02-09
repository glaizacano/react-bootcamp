import axios from 'axios';

const KEY = 'AIzaSyAiXNwugUcLWr2Cg12OcgOx_1M8vZB0sfQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});