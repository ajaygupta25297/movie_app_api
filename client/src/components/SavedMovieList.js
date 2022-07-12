import React, { Component } from "react";
import Card from "./Card";
import Movie from "./OneSavedMovie";
import API from "../utils/API";
import Col from "./Col";
import Row from "./Row";
import Container from "./Container";
import { List } from "./MovieList";
// import "../pages.css"

class Saved extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies = () => {
    API.getAllMovies()
      .then(res => {
        this.setState({
          movies: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleMovieDelete = id => {
    API.deleteMovie(id).then(res => this.getAllMovies());
  };

  render() {  
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card heading="My Saved Movies">
              {this.state.movies.length ? (
                <List>
                  {this.state.movies.map(movie => 
                    (
                      <Movie
                        key={movie._id}
                        title={movie.title}
                        src={movie.imageUrl}
                        director={movie.director}
                        genre={movie.genre}
                        description={movie.description}
                        released={movie.released}
                        Button={() => (
                          <button
                            onClick={() => {
                              this.handleMovieDelete(movie._id);
                              alert("The movie will be removed from your saved list.")
                            }}
                            className="delete-btn btn-danger ml-2"
                          >
                            Delete
                          </button>
                        )}
                      />
                    )
                  )}
                </List>
              ) : (
                <h2 className="text-center">No Saved Movie</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;