import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
