const API_KEY = process.env.API_KEY;

export const data = {
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}`
    },
    fetchComedy: {
        title: 'Comedy',
        url: `/discover/movie?api_key=326474e2aa5ef168c4353d49397599bf&with_genres=35`
    },
    fetchHorror: {
        title: 'Horror',
        url: `/discover/movie?api_key=326474e2aa5ef168c4353d49397599bf&with_genres=27`
    },
    fetchThriller: {
        title: 'Thriller',
        url: `/discover/movie?api_key=326474e2aa5ef168c4353d49397599bf&with_genres=53`
    },
    fetchPopular: {
        title: 'Popular',
        url: `/trending/all/week?api_key=${API_KEY}`
    }
} 