import React from 'react';
import { Carousel } from 'react-bootstrap';
import VerticalListView from '../../components/VerticalListView/VerticalListView';

function Home({ movies, topRatedMovies }) {
	
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
		</div>
	);
}

export default Home;