import styled from "styled-components";

export const Board = styled.div`
  margin: 30px auto;
  padding: 20px;
  width: 100%;
  max-width: 500px;

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  span {
    display: block;
    width: 100%;
    min-height: 50px;
  }

  span:nth-child(2) {
    font-size: 40px;
  }
`;
