import axios from "axios";

const URL = 'http://localhost:3001';

export const fetchData = async () => {
const [artistsRes, songsRes] = await Promise.all([
    axios.get(`${URL}/artists`),
    axios.get(`${URL}/songs`)
]);

return {
    artistArray: artistsRes.data,
    songsArray: songsRes.data
};
};
