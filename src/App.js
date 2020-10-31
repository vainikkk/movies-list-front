import React, {useEffect, useState} from "react"
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  const [ movies, setMovies ] = useState([])
  const [ topRatedMovies, setTopRatedMovies ] = useState([])
  
  useEffect(() => {
    fetch("/movies?genre=Drama")
      .then(res => res.json())
      .then(res => setMovies(res))
    fetch("/movies/topRated")
      .then(res => res.json())
      .then(res => setTopRatedMovies(res))
  }, [])

  return (
    <div className="App">
      <Header />
        <Home movies={movies} topRatedMovies={topRatedMovies}/>
      <Footer />
    </div>
  );
}

export default App;
