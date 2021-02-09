import styled from "styled-components";

export const PlacarBoard = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

  div {
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
  }

  div span {
    display: block;
  }
`;
