import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
const CardMovie = ({ mov }) => {
  return (
    <Col xs="12" sm="12" md="4" lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <h4> Movie Name : {mov.original_title}</h4>
              <p>Movie Date:{mov.release_date}</p>
              <p>Rated By : {mov.vote_count}</p>
              <p> Rate :{mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  );
};

export default CardMovie;
