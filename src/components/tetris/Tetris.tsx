import React, { useState } from "react";

import Stage from "./Stage";
import Display from "./Display";
import Button from "./Button";

import { createStage } from "./helpers";
import styled from "styled-components";

import { usePlayer } from "@/hooks/tetris/usePlayer";
import { useStage } from "@/hooks/tetris/useStage";

import { StageType } from "./helpers";
import { PlayerTypes } from "@/hooks/tetris/usePlayer";
import { PosTypes } from "@/hooks/tetris/usePlayer";

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
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useState<StageType | PlayerTypes>(player);
  console.log("re-render");
  //StageType | React.Dispatch<React.SetStateAction<StageType>>
  const movePlayer = (dir: number) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    setStage(createStage());
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
    resetPlayer();
  };

  const dropPlayer = () => {
    drop();
  };

  const move = (e: React.KeyboardEvent) => {
    if (!gameOver) {
      switch (e.key) {
        case "ArrowLeft":
          movePlayer(-1);
          break;
        case "ArrowUp":
          // movePlayer(-1);
          break;
        case "ArrowRight":
          movePlayer(1);
          break;
        case "ArrowDown":
          dropPlayer();
          break;
      }
    }
  };

  return (
    <StyledWrapper role="button" tabIndex={0} onKeyDown={(e) => move(e)}>
      <StyledTetris>
        {stage && <Stage stage={stage} />}
        <aside>
          {gameOver ? (
            <Display gameStatus="OVER" text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <Button text="Start" onClick={() => startGame()} />
        </aside>
      </StyledTetris>
    </StyledWrapper>
  );
};

export default Tetris;
