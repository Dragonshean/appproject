import { StyleSheet, Text, View } from 'react-native';

export default function Header () {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Dra Shean 待辦事項</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        paddingTop: 75,
        backgroundColor: '#FE0155',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

