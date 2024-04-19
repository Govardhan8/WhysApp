import { StyleSheet, View } from "react-native";
import ChatList from "./components/ChatList";
import MessageScreen from "./components/MessageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageWithName from "./components/ImageWithName";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ChatList}
          options={{
            title: "WhysApp",
            headerStyle: {
              backgroundColor: "#075E54",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="messageScreen"
          component={MessageScreen}
          options={({ route }) => ({
            title: (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 0,
                  gap: "5px",
                }}
              >
                <ImageWithName name={route.params.title} DP={route.params.dp} />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#075E54",
            },
            headerTintColor: "#fff",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
});
