import { PlayboardType } from "./types";
import { View, Text} from 'react-native';
import { Pressable, Wrap } from "@react-native-material/core";
import { Tile } from "../Tile";

const Playboard: PlayboardType = () => {
    const Tiles = Array.from({length: 9}, (_, i) => <Tile pos={i + 1} key={i}/>)

    return (
        <View style={{alignItems: 'center', width: '95%', marginHorizontal: '2.5%', marginTop: 100}}>
            <Wrap>
                {Tiles}
            </Wrap>
        </View>
    )
}

export { Playboard };