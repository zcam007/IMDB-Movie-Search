import React, { useState, useEffect } from 'react';

import './styles/style.css';
import { Media, Container, Row, Col } from 'react-bootstrap';

export default function MovieCard(props) {
  useEffect(() => {
    document.title = `IMDB`;
    if (props.movie.imageURL === undefined) {
    }
  });
  return (
    <>
      <div className="card-container center">
        {/* <Card className="center" width={256}> */}
        {/* <Image
            src={`https://image.tmdb.org/t/p/w500/${props.movie.imageURL}`}
          /> */}

        {/* <Heading>{props.movie.title}</Heading> */}
        {/* </Card> */}
        {/* <FadeIn> */}
        {/* <Container> */}
        {/* <Row> */}
        {/* <Col>1 of 1</Col> */}
        {/* </Row> */}

        <div className="shadow">
          <Media>
            <Media.Body>
              <Row>
                <h4 className="title">{props.movie.title}</h4>
              </Row>
              <Row>
                <p className="tagline">{props.movie.tagline}</p>
              </Row>
              <Row>
                <p className="overview">{props.movie.overview}</p>
              </Row>
              <Row>
                <p className="genre">{props.movie.genres}</p>
              </Row>
              <Row>
                <p className="productionCompanies">
                  {props.movie.production_companies}
                </p>
              </Row>

              <Row>
                <Col style={{ align: 'left' }}>
                  <span className="subheads">Original Release </span>
                  <p className="minorHeadings">{props.movie.release_date}</p>
                </Col>
                <Col>
                  <span className="subheads">Running Time </span>
                  <p className="minorHeadings">{props.movie.runtime} mins</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="subheads">Box Office </span>
                  <p className="minorHeadings">${props.movie.revenue}</p>
                </Col>
                <Col>
                  <span className="subheads">Vote Average </span>
                  <p className="minorHeadings">{props.movie.vote_average}/10</p>
                </Col>
              </Row>
            </Media.Body>
            {/* {if(props.movie.imageURL)==undefined} */}
            <img
              width={250}
              height={412}
              className="ml-3"
              src={`https://image.tmdb.org/t/p/w500/${props.movie.imageURL}`}
              alt="No Photo available"
            />
          </Media>
          {/* </FadeIn> */}
        </div>
        {/* </Container> */}
      </div>
    </>
  );
}
