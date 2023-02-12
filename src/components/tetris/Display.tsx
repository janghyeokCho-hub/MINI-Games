import styled from "styled-components";

interface PropsTypes {
  gameStatus: string;
  text: string;
}

interface StyledPropsTyps {
  gameStatus: string;
}

const StyledDisplay = styled.div<StyledPropsTyps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #d6eaf8;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameStatus === "OVER" ? "red" : "#34495E")};
  background: #ebf5fb;
  font-size: 0.8rem;
`;

const Display = ({ gameStatus, text }: PropsTypes) => {
  return <StyledDisplay gameStatus={gameStatus}>{text}</StyledDisplay>;
};
export default Display;
