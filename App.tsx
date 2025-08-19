import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "./src/components/Home";
import About from "./src/components/About";
import Welcome from "./src/components/Welcome";
import Login from "./src/User/Login";
import Register from "./src/User/Register";
import Base1 from "./src/Other/Base1";
import Base2 from "./src/Other/Base2";
import Base3 from "./src/Other/Base3";

const Stack = createNativeStackNavigator();

const MyApp = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Base1" component={Base1} />
    <Stack.Screen name="Base2" component={Base2} />
    <Stack.Screen name="Base3" component={Base3} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
};

export default App;
