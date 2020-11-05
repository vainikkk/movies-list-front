import React, { useEffect, useState } from 'react';

function MovieDetails(props) {
  const movieId = props.match?.params?.movieId
  const [movie,setMovie] = useState({})
  useEffect(() => {
    if(movieId){
      fetch(`/movies/${movieId}`)
      .then(res => res.json())
      .then(res => setMovie(res))
    }
  },[movieId])

  return (
    <div>
      <h1>HELLO</h1>
      <img src={movie.poster} alt="poster"/>
    </div>
  );
}

export default MovieDetails;