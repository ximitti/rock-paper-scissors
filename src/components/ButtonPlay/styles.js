import styled from "styled-components";

export const PlayButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin: 15px 30px;
  padding: 10px;
  color: #fff;
  font-size: 40px;
  transition: 0.3s cubic-bezier(0.38, -0.69, 0.36, 0.43);

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
