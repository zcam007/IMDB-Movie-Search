/* eslint-disable lines-between-class-members */
/* eslint-disable dot-notation */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import MovieCard from '../../components/MovieCard';
import './styles/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';

export default class HomePage extends React.Component {
  state = {
    value: 'Joker',
    suggestions: [],
    selectedMovie: { title: '' },
  };

  componentWillMount() {
    this.onSuggestionsFetchRequested = debounce(
      500,
      this.onSuggestionsFetchRequested,
    );
  }

  renderSuggestion = suggestion => (
    <div className="result">
      <div className="">{suggestion.title}</div>

      {/* <div className="shortCode">{suggestion.budget}</div>  */}
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${value}?&api_key=0b35c729c68f5051fbe45a3a4d7a4e5f`,
        {
          query: {
            multi_match: {
              query: value,
              fields: ['title', 'budget'],
            },
          },
          // sort: ['_score', { createdDate: 'desc' }],
        },
      )
      .then(res => {
        const results = res.data.results.map(obj => {
          const robj = {};
          robj['title'] = obj.title;
          robj['id'] = obj.id;
          return robj;
        });
        this.setState({ suggestions: results });
        console.log(res.data.results);
      });
  };

  onSuggestionsClearRequested = () => {
    // console.log(props);
    this.setState({ suggestions: [] });
  };
  textBoxDisplayValue = suggestion => {
    // this.setState({
    //   selectedMovie: {
    //     title: suggestion.title,
    //     imageURL: suggestion.poster_path,
    //     overview: suggestion.overview,
    //     vote_average: suggestion.vote_average,
    //     release_date: suggestion.release_date,
    //     genres: suggestion.genres,
    //   },
    // });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          suggestion.id
        }?&api_key=0b35c729c68f5051fbe45a3a4d7a4e5f`,
      )
      .then(response => {
        const robj = {};

        robj['title'] = response.data.title;
        robj['id'] = response.data.id;
        robj['imageURL'] = response.data.poster_path;
        robj['overview'] = response.data.overview;
        robj['vote_average'] = response.data.vote_average;
        robj['release_date'] = response.data.release_date;
        robj['tagline'] = response.data.tagline;
        robj['runtime'] = response.data.runtime;
        robj['revenue'] = response.data.revenue
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        robj['backdrop_path'] = response.data.backdrop_path;

        robj['vote_average'] = response.data.vote_average;

        robj['genres'] = response.data.genres.map((obj, i) => {
          let genre = '';
          if (i === response.data.genres.length - 1) {
            genre += obj.name;
          } else {
            genre += `${obj.name}, `;
          }
          return genre;
        });
        robj['production_companies'] = response.data.production_companies.map(
          (obj, i) => {
            let production_companies = '';
            if (i === response.data.genres.length - 1) {
              production_companies += obj.name;
            } else {
              production_companies += `${obj.name}, `;
            }
            return production_companies;
          },
        );

        // console.log(response.data);
        document.getElementById('background').style.background = null;
        const urlComplete = `https://image.tmdb.org/t/p/original${
          response.data.backdrop_path
        }`;
        document.getElementById(
          'background',
        ).style.background = `linear-gradient(rgba(0, 0, 0, 0.85) 15%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 1) 90%), url(${urlComplete}) no-repeat center`;

        // background: linear-gradient(rgba(0, 0, 0, 0.85) 15%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 1) 90%), url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80") no-repeat center;

        this.setState({ selectedMovie: robj });
      });

    return suggestion.title;
  };

  getBackgound = () => this.state.selectedMovie.backdrop_path;
  constructor(props) {
    super(props);
    const intialMovie = {};
    intialMovie['id'] = 475557; // Joker Movie
    this.textBoxDisplayValue(intialMovie);
  }

  render() {
    const { value, suggestions, selectedMovie } = this.state;
    const inputProps = {
      placeholder: 'Movie Name',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="background" id="background">
        {/* <div id="background" /> */}
        <div className="App">
          <Container>
            <Row>
              <Col className="col">
                <h1 className="logo">IMDB Movies</h1>
              </Col>
              <Col className="col">
                <Autosuggest
                  className=" text-input"
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={this.textBoxDisplayValue}
                  renderSuggestion={this.renderSuggestion}
                  inputProps={inputProps}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <MovieCard movie={selectedMovie} />
        <Footer />
      </div>
    );
  }
  componentDidUpdate() {
    // if (this.selectedMovie.state.backdrop_path !== undefined)
    //   document.body.style.backgroundImage =
    //     'url(https://image.tmdb.org/t/p/original/' +
    //     this.selectedMovie.state.backdrop_path +
    //     ')';
    // console.log(this.state.selectedMovie.backdrop_path);
    // console.log(this.getBackgound());
  }
}
