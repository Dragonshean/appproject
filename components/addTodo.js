import { useState } from 'react'
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';

export default function AddTodo ({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (value) => {//使用useState跟input 做連動
        setText(value);
    }

    const autoClearText = (text) => {//當按增加時, 自動清除輸入的字
        setText('')
    }

    return (
        <View>
            <TextInput 
                value={text}
                style= {styles.input}
                placeholder='啥事要做?'
                onChangeText={changeHandler}
                autoFocus={true}
            />
            <Pressable style={styles.button} onPress={() => {submitHandler(text), autoClearText(text)}}> 
                <Text style={styles.text}> {'-->'} 點擊來增加壓力 {'<--'} </Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#854CBF'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})



