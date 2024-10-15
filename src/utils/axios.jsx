import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzRhMjEzM2Y5NzNkNTU4NTk0OGNiMTI2ODljYzA2NCIsIm5iZiI6MTcyODA1OTU4Mi4wNDkyMjMsInN1YiI6IjY3MDAxNTZkNzgzMGMxMzAxZTdjY2QyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hFLwZGtqfpz-wzALKQbtKtG__Oks5nAn3tq6-gYOd14'
    }
})

export default instance;
