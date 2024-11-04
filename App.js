import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/Main";
import Home from "./pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NotesProvider } from "./context/NotesContext";
import { StatusBar } from "expo-status-bar";
import Note from "./pages/Note";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NotesProvider>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen
                options={{ headerShown: false }}
                name="Main"
                component={Main}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
              />
              <Stack.Screen
                options={{title : ""}}
                name="Note"
                component={Note}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </NotesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
