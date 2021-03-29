import React, { Component } from "react";
import styled from "styled-components";

function Button(props) {
  const { value, onClick, width } = props;

  const Button = styled.button`
    background: #92ec93;
    border-radius: 5px;
    border: none;
    color: black;
    width: ${width};
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    height: 40px;
    margin: 0px 0px 10px 0px;
    font-weight: 700;
  `;

  return <Button onClick={onClick}>{value}</Button>;
}

export default Button;
