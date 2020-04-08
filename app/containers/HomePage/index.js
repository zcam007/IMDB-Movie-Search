/* eslint-disable lines-between-class-members */
/* eslint-disable dot-notation */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { debounce } from 'throttle-debounce';
import MovieCard from '../../components/MovieCard';
import './styles/style.css';
export default class HomePage extends React.Component {
  state = {
    value: 'Interstellar',
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
          robj['poster_path'] = obj.poster_path;
          robj['overview'] = obj.overview;
          robj['vote_average'] = obj.vote_average;
          robj['release_date'] = obj.release_date;
          robj['genres'] = obj.genres;
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
        // robj['genres'] = response.data.genres;
        // console.log(response.data);

        this.setState({ selectedMovie: robj });
      });

    console.log(suggestion.id);
    return suggestion.title;
  };

  render() {
    const { value, suggestions, selectedMovie } = this.state;
    //  this.setState()
    const inputProps = {
      placeholder: 'Movie Name',
      value,
      onChange: this.onChange,
    };

    return (
      <div className="App">
        <h1 className="hello">IMDB Movies</h1>
        <Autosuggest
          className="text-input"
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.textBoxDisplayValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
        <MovieCard movie={selectedMovie} />
      </div>
    );
  }
}
