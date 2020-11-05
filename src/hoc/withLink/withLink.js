import React from "react";
import { Link } from "react-router-dom";
const withLink = WrapperComponent => (props) => {
  let newProps = {
    ...props,
    movie: {
      ...props.movie,
      title: <Link to={`/movie/${props.movie._id}`}>{props.movie.title}</Link>
    }
  }
  return <WrapperComponent {...newProps} />
}

export default withLink;