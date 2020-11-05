import React from 'react';
import { CardDeck, Carousel } from 'react-bootstrap';
import "./VerticalListView.css"
import CardView from '../CardView/CardView';
import withLink from '../../hoc/withLink/withLink';

const ClickAbleCard = withLink(CardView)
function VerticalListView({ movies, title }) {
  return (
    <div className="vertical-list-view">
      <span>
        {title}
      </span>
      <Carousel indicators={false} wrap={false}>
        {movies.length > 0 && movies.filter((movie, index) => movie.poster && index * 5 <= movies.length).map((movie, i) => (
          <Carousel.Item>
            <CardDeck>
              {movies.filter((movie, index) => (i * 5) <= index && index <= ((i + 1) * 5))
              .map(movie =>  <ClickAbleCard movie={movie} key={movie._id}/>)}
            </CardDeck>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default VerticalListView;