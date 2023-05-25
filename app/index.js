import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView, Touchable, ScrollView } from "react-native";
import { Home } from "../components/Home";

const App = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "blue" },
          headerTitle: "Todo List",
        }}
      />
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
