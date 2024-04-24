import React from 'react';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import SingleMovieDetail from './pages/SingleMovieDetail/SingleMovieDetail';
import TopRated from './pages/TopRated/TopRated';
import UpcomingMovie from './pages/UpcomingMovie/UpcomingMovie';

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/"  element={<LandingPage />} /> 
        <Route exact path="/movies/:movieId" element={<SingleMovieDetail />} />
        <Route exact path='/toprated' element={<TopRated/>}/>
        <Route exact path='/upcomingmovie' element={<UpcomingMovie/>}/>
      </Routes>
    </Router>

  );
}

export default App;
