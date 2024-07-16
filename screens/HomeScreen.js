import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../photos/img/logo2.png')} style={styles.logo} />
                <View style={styles.navContainer}>
                    <Text style={styles.navSection}>Section 1</Text>
                    <Text style={styles.navSection}>Section 2</Text>
                    <Text style={styles.navSection}>Section 3</Text>
                    <TouchableOpacity style={styles.navLogin} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.navLoginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.title}>Promotions</Text>
                <View style={styles.promotionContainer}>
                    <Text style={styles.promotion}>Promotion 1</Text>
                    <Text style={styles.promotion}>Promotion 2</Text>
                    <Text style={styles.promotion}>Promotion 3</Text>
                    {/* Add more promotions as needed */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navSection: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    navLogin: {
        backgroundColor: '#478CCF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    navLoginText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    promotionContainer: {
        alignItems: 'center',
    },
    promotion: {
        fontSize: 18,
        marginVertical: 10,
    },
});

export default HomeScreen;
