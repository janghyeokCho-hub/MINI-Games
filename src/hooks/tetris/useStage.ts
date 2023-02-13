import { useState } from "react";
import { createStage } from "@/components/tetris/helpers";

export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  useState(createStage());

  return [stage, setStage];
};
