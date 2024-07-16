import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const UserScreen = ({ route, navigation }) => {
  const { username } = route.params;

  const handleLogout = () => {
    // Implementar lógica de cierre de sesión
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{username}</Text>
        {/* Mostrar más información del usuario según sea necesario */}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Edit Profile" onPress={() => {/* Implementar lógica para editar perfil */}} />
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default UserScreen;
