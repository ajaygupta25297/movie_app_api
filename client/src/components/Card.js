import React from "react";
import styled from 'styled-components';

const StyledHeader = styled.h4`
  font-family: 'Spartan', sans-serif;

`;

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <StyledHeader>{props.heading}</StyledHeader>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
