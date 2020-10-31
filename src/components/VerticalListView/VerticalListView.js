import React from 'react';
import { Card, CardDeck, Carousel } from 'react-bootstrap';
import "./VerticalListView.css"
import { ReactComponent as Star } from "../../assets/images/star-solid.svg"

function VerticalListView({ movies, title }) {
  return (
    <div className="vertical-list-view">
      <span>
        {title}
      </span>
      <Carousel indicators={false} wrap={false}>
        {movies.length > 0 && movies.filter((movie, index) => movie.poster && index * 6 <= movies.length).map((movie, i) => (
          <Carousel.Item>
            <CardDeck>
              {movies.filter((movie, index) => (i * 6) <= index && index <= ((i + 1) * 6)).map(movie => (
                <Card>
                  <Card.Img variant="top" src={movie.poster} width="100" height="200" />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    {/* <Card.Text>
                  {movie.plot}
                </Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"><span className="rating"><Star />{movie.imdb.rating}</span></small>
                  </Card.Footer>
                </Card>
              ))}
            </CardDeck>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default VerticalListView;