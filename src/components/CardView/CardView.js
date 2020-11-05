import React from 'react';
import { ReactComponent as Star } from "../../assets/images/star-solid.svg"
import { Card } from 'react-bootstrap';

function CardView({movie}) {
  return (
    <Card>
      <Card.Img variant="top" src={movie.poster} width="100" height="200" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"><span className="rating"><Star />{movie.imdb.rating}</span></small>
      </Card.Footer>
    </Card>
  );
}

export default CardView;