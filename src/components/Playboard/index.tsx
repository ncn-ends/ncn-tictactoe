import { PlayboardType } from "./types";
import { View, Text} from 'react-native';
import { Pressable, Wrap } from "@react-native-material/core";
import { Tile } from "../Tile";

const Playboard: PlayboardType = () => {
    const Tiles = Array.from({length: 9}, (_, i) => <Tile pos={i + 1} key={i}/>)

    return (
        <View>
            <Wrap m={3} style={{alignSelf: 'center'}}>
                {Tiles}
            </Wrap>
        </View>
    )
}

export {Playboard};