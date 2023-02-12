import Stage from "./Stage";
import Display from "./Display";
import Button from "./Button";

import { createStage } from "./helpers";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

const Tetris = () => {
  const stage = createStage();
  return (
    <StyledWrapper>
      <StyledTetris>
        {stage && <Stage stage={stage} />}
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <Button text="Start" />
        </aside>
      </StyledTetris>
    </StyledWrapper>
  );
};

export default Tetris;
