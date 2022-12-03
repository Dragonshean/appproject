import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'


export default function TodoItem ({ item, pressHandler }) {
    
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)  }>
            <View style={styles. item}>
                <Text style={styles.itemText}> {item.text} </Text>
                <MaterialIcons name='delete-forever' size={35} color="#333"/>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        padding: 16,
        marginTop: 16,
        borderColor: '#01FE33',
        borderWidth: 3,
        borderStyle: 'dashed',
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 25,
        marginLeft: 10
    }
})






