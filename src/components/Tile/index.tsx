import { Pressable } from "@react-native-material/core"
import { Alert } from "react-native";

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

    const tapTile = () => {
        alert('Hello ' + pos);
    }

    return (
        <Pressable 
            style={{ width: '33%', height: 120, backgroundColor }} 
            onPress={()=>tapTile()} 
        />
    )
}