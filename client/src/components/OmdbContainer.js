import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import Movie from "./OneSavedMovie";
import Saved from "./SavedMovieList";
import API from "../utils/API";
import styled from 'styled-components';

const StyledH1 = styled.h1`
  padding: 10px;
  font-family: 'Grandstander', cursive;
  font-weight: 600;
  margin-top: 30px;
`;

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Fault in Our Stars");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => {
        this.setState({ result: res.data });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  handleMovieSave = id => {
    API.goSaveMovie({
      title: this.state.result.Title,
      imageUrl: this.state.result.Poster,
      director: this.state.result.Director,
      genre: this.state.result.Genre,
      description: this.state.result.Plot,
      released: this.state.result.Released
    })
  };

  render() {
    return (
      <Container>
        <StyledH1>Search for a Movie!</StyledH1>
        <Row>
          <Col size="md-4">
            <Card heading="Movie Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="md-8">
            <Card
              heading={"Movie Result"}
            >
              {this.state.result.Title ? (
                <Movie
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  description={this.state.result.Plot}
                  released={this.state.result.Released}
                  Button={() => (
                    <button
                      onClick={() => {
                        this.handleMovieSave(this.state.result.id);
                        alert("Your movie has been saved!");
                        window.location.reload();
                      }}
                      className="save-btn btn-primary ml-2"
                    >
                      Save
                    </button>
                  )}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
        </Row>
        <br />
        <StyledH1>Keeping a Record of the Movies I liked!</StyledH1>
        <Row>
          <Saved />
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;