import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Image, Heading } from 'rebass';
import './styles/style.css';
import { Media, Container, Row, Col } from 'react-bootstrap';

export default function MovieCard(props) {
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
        <Container fluid>
          {/* <Row> */}
          {/* <Col>1 of 1</Col> */}
          {/* </Row> */}

          <div className="shadow">
            <Media>
              <Media.Body>
                <Row>
                  <h5 className="title">{props.movie.title}</h5>
                </Row>
                <Row>
                  <p className="minorHeadings">{props.movie.tagline}</p>
                </Row>
                <Row>
                  <p>{props.movie.overview}</p>
                </Row>
                <Row>
                  <span className="minorHeadings">Original Release </span>
                </Row>
                <Row>
                  <p className="tagline">{props.movie.release_date}</p>
                </Row>
                <Row>
                  <p>{props.movie.vote_average}</p>
                </Row>
                <Row>
                  <p>{props.movie.genres}</p>
                </Row>
              </Media.Body>
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
        </Container>
      </div>
    </>
  );
}
