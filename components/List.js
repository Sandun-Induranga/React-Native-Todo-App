import { useEffect, useState } from "react";
import {
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import Task from "./Task";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    setTodos(["Task 1", "Task 2", "Task 3"]);
  }, []);

  const addTodo = () => {
    setTodos([...todos, task]);
  };

  const handleInput = (text) => {
    setTask(text);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={(text) => handleInput(text)}
          placeholder="Enter Your Task"
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={todos}
        renderItem={({ item }) => <Task task={item}></Task>}
      />
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
