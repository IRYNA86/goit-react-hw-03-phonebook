import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
font-size: 15px;
margin-left: 5px;`;

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};