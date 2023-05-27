import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Dialog from "react-native-dialog";

const Task = (props) => {
  return (
    <LinearGradient style={styles.container} colors={["#758bfd", "#ffd6ff"]}>
      <Text style={styles.text}>{props.task}</Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <Feather name="edit" size={24} color="green" />
        <MaterialIcons name="delete-outline" size={24} color="red" />
      </View>
      <View style={styles.container}>
        <Button title="Show dialog" />
        <Dialog.Container visible>
          <Dialog.Title>Update TODO</Dialog.Title>
          <TextInput
            style={styles.input}
            placeholder=""
            value="TODO"
          ></TextInput>
          <Dialog.Button label="Cancel" />
          <Dialog.Button label="UPDATE" />
        </Dialog.Container>
      </View>
    </LinearGradient>
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
    justifyContent: "space-between",
    marginHorizontal: 20,
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 10,
    borderColor: "#00b4d8",
    fontSize: 20,
  },
});
