import styled from "styled-components";

export const ResultDiv = styled.div`
  width: 100%;
  min-height: 150px;

  button {
    outline: none;
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 150px;
    height: 100%;
    max-height: 30px;
    background-color: #33c;
    color: #fff;
    text-transform: uppercase;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 0 0 3px #111;
  }
`;
