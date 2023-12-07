import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

export default LoginView = ({ route }) => {
    const paciente = route.params?.paciente;

    const pacienteId = paciente?.id;

return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Bem-Vinde ao HealthApp!</Text>
                <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }} style={styles.image} />
                <Text style={styles.desc}>{'Aqui você poderá acompanhar a sua saúde e ter atendimento especializado 24h por dia.'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#00bffe',
        fontWeight: 'bold',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 39,
    },
    desc: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 30,
        color: '#808080'
    },
    buttonsContainer: {
        flex: 2,
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-around'
    },
    button: {
        width: '48%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    facebook: {
        backgroundColor: '#4267B2'
    },
    google: {
        backgroundColor: '#DB4437'
    }
});