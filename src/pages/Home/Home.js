import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import VerticalListView from '../../components/VerticalListView/VerticalListView';

function Home() {
	const [movies, setMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [hindiMovies, setHindiMovies] = useState([])

  useEffect(() => {
    fetch("/movies?genre=Drama")
      .then(res => res.json())
      .then(res => setMovies(res))
    fetch("/movies/topRated")
      .then(res => res.json())
      .then(res => setTopRatedMovies(res))
    fetch("/movies?country=India")
      .then(res => res.json())
      .then(res => setHindiMovies(res))
  }, [])

	return (
		<div>
			<Carousel>
				{topRatedMovies.length > 0 &&
					topRatedMovies.filter(movie => movie.poster)
						.map(movie => (
							<Carousel.Item className="bg-dark">
								<img
									className="d-block"
									height="300"
									style={{ verticalAlign: "middle", margin: "0px 50px" }}
									src={movie.poster}
									alt="First slide"
								/>
								<Carousel.Caption>
									<h3>{movie.title}</h3>
									<p>{movie.plot}</p>
								</Carousel.Caption>
							</Carousel.Item>
						))}
			</Carousel>
			<VerticalListView movies={topRatedMovies} title="Top Rated" />
			<VerticalListView movies={movies} title="Drama Movies" />
			<VerticalListView movies={hindiMovies} title="Hindi Movies" />
		</div>
	);
}

export default Home;