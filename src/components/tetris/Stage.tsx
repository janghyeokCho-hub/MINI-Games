import Cell from "./Cell";
import styled from "styled-components";
import { StageType } from "@/components/tetris/helpers";

interface StyledPropsTypes {
  width?: number;
  height?: number;
}

const StyledStage = styled.div<StyledPropsTypes>`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage?.map((row: any) =>
        row.map((cell: any, index: number) => {
          return <Cell key={`cell_${index}`} type={cell[0]} />;
        })
      )}
    </StyledStage>
  );
};

export default Stage;
