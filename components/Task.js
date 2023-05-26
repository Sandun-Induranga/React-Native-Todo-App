import { ScrollView, View } from "react-native";

const Task = (props) => {
  return (
    <View>
      <Text>{props.task}</Text>
    </View>
  );
};

export default Task;
