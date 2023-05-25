import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView, Touchable } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Touchable
        onPress={() => {
          router.push("/about");
        }}
      >
        <Text>Todo List</Text>
      </Touchable>
    </View>
  );
};

export default Home;
