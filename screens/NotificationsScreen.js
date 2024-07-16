import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const NotificationsScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para rastrear si el usuario ha iniciado sesión

  // Función para simular el inicio de sesión
  const handleLogin = () => {
    // Aquí podrías realizar la lógica de autenticación
    // Por ejemplo, verificar credenciales en una base de datos o API
    
    // Simulamos un inicio de sesión exitoso para este ejemplo
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.text}>Notifications Screen</Text>
          <Button
            title="Logout"
            onPress={() => setIsLoggedIn(false)}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.text}>
            You need to log in to view notifications.
          </Text>
          <Button
            title="Login"
            onPress={handleLogin}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default NotificationsScreen;
