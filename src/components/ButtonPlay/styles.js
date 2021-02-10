import styled from "styled-components";

export const PlayButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 15px 30px;
  padding: 10px;
  color: #fff;
  font-size: 40px;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
