import { useState } from "react";
import { BoardStateType } from "./types.store";

const storeStateDefaults = {
    boardState: Array.from({length: 9}, _ => '') as BoardStateType
} as const;

export const store = () => {
    const [boardState, setBoardState] = useState<BoardStateType>(storeStateDefaults.boardState)
}