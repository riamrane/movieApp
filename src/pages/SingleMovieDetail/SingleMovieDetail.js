import React, { useEffect, useState } from 'react'
import './SingleMovieDetail.css'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom';
import { getCastDetails, getMovieById } from '../../api/movie';
export default function SingleMovieDetail() {

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [castDetails, setCastDetails] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      const response = await getMovieById(movieId);
      setMovieDetails(response.data)

      // console.log(response)
    } catch (error) {
      console.error('error occured: ', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchCastDetails = async () => {
    try {
      const castdeets = await getCastDetails(movieId);
      setCastDetails(castdeets.data.cast)
    } catch (error) {
      console.error('error: ', error);
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  console.log(castDetails)
  useEffect(() => {
    fetchMovieDetails();
    fetchCastDetails();
  }, [])

  console.log(movieDetails)
  return (

    <div className='singleMovieDetail'>
      <Header />

      <div className='movieDetail-container'>
        {isLoading ? (
          <div>Loading info...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <div className='col-1 movie-deets'>
              <div className='row'>
                <div className='smallImg col2-1'>
                  <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt={movieDetails?.title} />
                </div>
                <div className='col2-2'>
                  <h3>{movieDetails?.title}</h3>
                  <h4>Rating: {movieDetails?.vote_average}</h4>
                  {/* <div>
                  <span>{movieDetails?.runtime}</span>
                  <span>{movieDetails?.genres}</span>
                  </div> */}
                  {/* <h5>Release date: {movieDetails?.release_date}</h5> */}
                </div>
              </div>
              <div className='row2'>
                <h3>Overview</h3>
                {movieDetails?.overview}
              </div>
            </div>
            <div className='col-2 image-backdrop'>
              <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`} alt={movieDetails?.title} />
            </div>
          </>
        )}
      </div>
      
     <div className='casttop'>
     <h3>Cast Details</h3>

<div className='castDetails'>
  {
    castDetails?.map((cast,index) => (
      <div className='singlecast' key={index}>
        <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.original_name} />
        <h2>{cast.original_name}</h2>
        <h5>Charater:{cast.character}</h5>
        {/* <h5>{cast}</h5> */}
      </div>
    ))
  }
</div>
     </div>

    </div>

  );
}
