import { useCallback, useState } from "react";
import { randomMino, ShapeType } from "@/components/tetris/minos";
import { STAGE_WIDTH } from "@/components/tetris/helpers";

export interface PlayerTypes {
  pos: PosTypes;
  tetromino: ShapeType;
  collided?: boolean;
}

export interface PosTypes {
  x: number;
  y: number;
  collided?: boolean;
}

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomMino().shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomMino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
