import { useState } from "react";
import { FlatList } from "react-native";

const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <>
      <FlatList data={todos} renderItem={({ item }) => <Text>{item}</Text>} />
    </>
  );
};

export default List;
