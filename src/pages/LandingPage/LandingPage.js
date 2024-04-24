import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import { getAllMovies } from '../../api/movie';
import Header from '../../Components/Header/Header';
import Pagination from '../../Components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [movieData, setMovieData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const lastIndex = currentPage * moviesPerPage;
  const firstIndex = lastIndex - moviesPerPage;

  const handleError = (error) => {
    setError(error);
    setIsLoading(false);
  };

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await getAllMovies();
      setMovieData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const records = movieData?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(movieData?.length / moviesPerPage) || 1;
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const navigate = useNavigate();

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const onMovieClick = (movieId) => {
    console.log('movie clicked', movieId);
    navigate(`/movies/${movieId}`);

  };

  return (
    <div>
      <Header />

      <div className="movieContainer">
        {isLoading ? (
          <div>Loading movies...</div>
        ) : error ? (
          <div>Error fetching movies: {error.message}</div>
        ) : movieData?.length > 0 ? (
          records.map((movie) => (
            <div className="singleMovie" key={movie.id} onClick={() => onMovieClick(movie.id)}>
              <div className="movieData">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <h5>Rating: {movie.vote_average}</h5>
              </div>
            </div>
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>

      

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        numbers={numbers}
        changeCPage={changeCPage}
      />
    </div>
  );
}
