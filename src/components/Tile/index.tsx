import { Pressable } from "@react-native-material/core"

type TileProps = {
    pos: number
}

/**
 * 
 * @param pos - Position of tile in board, min: 1, max: 9
 * @returns 
 */
export const Tile: React.FC<TileProps> = ({pos}) => {
    const backgroundColor = pos % 2 === 0
        ? "skyblue"
        : "darkgrey";

    return (
        <Pressable style={{ width: 120, height: 120, backgroundColor: backgroundColor }} />
    )
}