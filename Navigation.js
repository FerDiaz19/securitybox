import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { authenticateUser } from "./Services/api";

// Importar las pantallas
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import UserScreen from "./screens/UserScreen"; // Importar la pantalla de usuario

const HomeStackNavigator = createNativeStackNavigator();

function MyStack({ userLoggedIn }) {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerTitle: "Back",
        }}
      />
      {userLoggedIn ? (
        <HomeStackNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            headerTitle: "Back",
          }}
        />
      ) : null}
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "none",
          paddingBottom: 5,
          textDecorationLine: "none",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "Home Screen",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
            />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer({ userLoggedIn }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerRight: () =>
          !userLoggedIn ? (
            <View style={styles.headerRightContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.headerButton}
              >
                <Text style={styles.headerButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>
          ) : null,
      })}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      {userLoggedIn ? (
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            headerTitle: "User Profile",
            headerTitleAlign: "center",
          }}
        />
      ) : null}
      {/* Add more screens to the drawer as needed */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10, // Adjust as needed
  },
  headerButton: {
    padding: 10,
    backgroundColor: "#478CCF", // Adjust as needed
    borderRadius: 10,
  },
  headerButtonText: {
    color: "#fff", // Adjust as needed
  },
});

export default function Navigation() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogin = async (nickname, password) => {
    try {
      // Llamar a la función de autenticación
      const response = await authenticateUser(nickname, password);
      // Si la autenticación es exitosa, establecer el estado de usuario como autenticado
      setUserLoggedIn(true);
    } catch (error) {
      // Manejar errores de autenticación
      console.error("Authentication Error:", error);
    }
  };

  return (
    <NavigationContainer>
      <MyDrawer userLoggedIn={userLoggedIn} />
    </NavigationContainer>
  );
}
