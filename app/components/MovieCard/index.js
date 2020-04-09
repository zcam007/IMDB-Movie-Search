/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';

import './styles/style.css';
import './styles/_style.scss';
import { Media, Card, Row, Col } from 'react-bootstrap';

export default function MovieCard(props) {
  useEffect(() => {
    document.title = `IMDB`;
    if (props.movie.imageURL === undefined) {
    }
  });
  return (
    <>
      <div className="card-container center col-xs-12 col-lg-7">
        <div className="shadow  col-xs-12 col-md-8 push-md-4 col-lg-12 push-lg-5">
          {/* col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5 */}
          <Media>
            <Row className="p-3">
              <Col className=" col-md-7 col-md-push-5">
                <Media.Body>
                  <Row>
                    <h4 className="title">{props.movie.title}</h4>
                  </Row>
                  <Row className="col-xs-1">
                    <p className="tagline col-xs-6">{props.movie.tagline}</p>
                  </Row>
                  <Row>
                    <p className="overview col-xs-6">{props.movie.overview}</p>
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
                      <p className="minorHeadings">
                        {props.movie.release_date}
                      </p>
                    </Col>
                    <Col>
                      <span className="subheads">Running Time </span>
                      <p className="minorHeadings">
                        {props.movie.runtime} mins
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="subheads">Box Office </span>
                      <p className="minorHeadings">${props.movie.revenue}</p>
                    </Col>
                    <Col>
                      <span className="subheads">Vote Average </span>
                      <p className="minorHeadings">
                        {props.movie.vote_average}/10
                      </p>
                    </Col>
                  </Row>
                </Media.Body>
              </Col>
              {/* col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 */}
              <Col className=" col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-12">
                <img
                  width={250}
                  height={412}
                  className="ml-3"
                  src={`https://image.tmdb.org/t/p/w500/${
                    props.movie.imageURL
                  }`}
                  alt="No Photo available"
                />
              </Col>
            </Row>
          </Media>
        </div>
      </div>

      {/* <div className="col-xs-12 cardcont nopadding">
        <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
          <h1>{props.movie.title}</h1>

          <span className="tagline">{props.movie.tagline}</span>
          <p>{props.movie.overview}</p>
          <div className="additional-details">
            <span className="genre-list">{props.movie.genres}</span>
            <span className="production-list">
              {props.movie.production_companies}
            </span>
            <div className="row nopadding release-details">
              <div className="col-xs-6">
                {' '}
                Original Release:{' '}
                <span className="meta-data">{props.movie.release_date}</span>
              </div>
              <div className="col-xs-6">
                {' '}
                Running Time:{' '}
                <span className="meta-data">
                  {props.movie.runtime} mins
                </span>{' '}
              </div>
              <div className="col-xs-6">
                {' '}
                Box Office:{' '}
                <span className="meta-data">{props.movie.revenue}</span>
              </div>
              <div className="col-xs-6">
                {' '}
                Vote Average:{' '}
                <span className="meta-data">{props.movie.vote_average}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
          <img
            id="postertest"
            className="poster"
            src={`https://image.tmdb.org/t/p/w500/${props.movie.imageURL}`}
          />
        </div>
      </div> */}
    </>
  );
}
