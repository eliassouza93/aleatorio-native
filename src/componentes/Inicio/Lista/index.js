import { View, FlatList } from "react-native"
import Item from "./Item"

export default function Lista({ setDados }) {
    return (
        <View>
            <FlatList
                data={setDados}
                renderItem={({ item }) =>
                    <>
                        <View>
                            <Item {...item} />
                        </View>
                    </>
                }
               
            />

        </View>
    )
}