import styled from "styled-components";
import { MINOS } from "./minos";

interface PropsTypes {
  type: string;
}

interface StyledPropsTypes {
  type?: string | number;
  color?: string;
}

const Cell = ({ type }: PropsTypes) => {
  return <StyledCell type={type} color={MINOS[type].color} />;
};

const StyledCell = styled.div<StyledPropsTypes>`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
  border-top-color: rgba(${(props) => props.color}, 1);
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
  border-right-color: rgba(${(props) => props.color}, 1);
`;

export default Cell;
