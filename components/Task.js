import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.task}</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#00b4d8",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
