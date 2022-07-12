import React from "react";
import { ListItem } from "./MovieList";
import Row from "./Row";
import Col from "./Col";
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 75%;
`;

const StyledMovieP = styled.p`
  font-size: 50px;
  font-family: 'Grandstander', cursive;
`;

const StyledInfoP = styled.p`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  padding: 5px;
`;

const StyledSpan = styled.span`
  font-weight: 600;
`;

function Movie(props) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-4" className="img-desc">
          <StyledImg className="img-thumbnail img-fluid w-100" src={props.src} alt={props.title} />
        </Col>
        <Col size="md-8" className="movie-info">
          <StyledMovieP className="movie-title">{props.title}</StyledMovieP>
          <StyledInfoP>
            {props.description}
            <br />
            <br />
            <StyledSpan>Directed by: </StyledSpan>{props.director}
            <br />
            <StyledSpan>Genre:</StyledSpan> {props.genre}
            <br />
            <StyledSpan>Released on:</StyledSpan> {props.released}
          </StyledInfoP>
        </Col>
      </Row>
      <props.Button />
    </ListItem>
  );
}

export default Movie;