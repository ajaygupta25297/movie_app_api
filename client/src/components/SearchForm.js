import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: 'Montserrat', sans-serif;`
;

function SearchForm(props) {
  return (
    <form>
      <StyledDiv className="form-group">
        <label htmlFor="search">Name of Movie:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Movie Name"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </StyledDiv>
    </form>
  );
}

export default SearchForm;
