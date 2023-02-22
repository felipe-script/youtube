import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;

export default {
    getVideosBySearch(queryToSearch, maxResults = 5){
    return apiClient.get(`search/?part=snippet&key=${API_KEY}&q=${queryToSearch}&maxResults=${maxResults}`)
  },
}