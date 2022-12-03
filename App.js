import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import "react-native-get-random-values";
import { v4 } from "uuid";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Learn React Native", key: "1" },
    { text: "Start a side project", key: "2" },
    { text: "Finished the project", key: "3" },
  ]);

  // function clearTodo (key) {
    
  // }

  const pressHandler = (key) => {
    //利用filter 對應key 執行刪除
    Alert.alert("確定完成了嗎?", "Are you sure?", 
      [
        { 
          text: "確定", onPress: () => setTodo((pervTodo) => { 
          return pervTodo.filter(todo => todo.key !== key)
          }) 
        },
        {text: "還沒"}
      ]
    );
  };

  const submitHandler = (text) => {
    //用uuid 執行 新增不同的品項

    if (text.length > 0) {
      const uuid = v4();
      setTodo((prevTodo) => {
        return [{ text, key: uuid }, ...prevTodo];
      });
    } else {
      Alert.alert("喂!", "你沒輸入啊!", [{ text: "知道了" }]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/*Header*/}
        <Header />
        <View style={styles.content}>
          {/* To Do Form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//React Native 不支援CSS  但語法類似CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 15,
  },
  list: {
    flex: 1,
    marginTop: 0,
  },
});
