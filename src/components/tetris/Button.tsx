import styled from "styled-components";

interface PropsTypes {
  callback?: Function;
  text: string;
}

const StyledButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: #34495e;
  background: #a9dfbf;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const Button = ({ callback, text }: PropsTypes) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
