import axios from 'axios';

export const getAllMovies= async()=>{

    const response = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');

    return response;
}

export const getMovieById = async(movieId)=>{
    const response = axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
    return response;
}

export const getCastDetails = async(movieId)=>{
    const response = axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
    return response
}

export const getTopRatedMovies = async()=>{
    const response = axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
    return response;
}

export const getUpcomingMovie = async()=>{
    const response = axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1');
    return response;
}