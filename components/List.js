import { useState } from "react";
import {
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onSubmitEditing={(e) => addTodo}
          placeholder="Enter Your Task"
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={todos} renderItem={({ item }) => <Text>{item}</Text>} />
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    width: "60%",
    borderRadius: 10,
    borderColor: "#00b4d8",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#00b4d8",
    padding: 10,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
  },
});
