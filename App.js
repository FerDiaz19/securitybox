import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import 'react-native-get-random-values';
import connectToMongoDB from './connection';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const App = () => {
  useEffect(() => {
    // Llamar a la función para conectar a MongoDB al iniciar la aplicación
    connectToMongoDB();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={AuthStack}
          options={{
            drawerLabel: 'Login',
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'log-in' : 'log-in-outline'} size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            drawerLabel: 'Register',
            drawerIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'log-in' : 'log-in-outline'} size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
