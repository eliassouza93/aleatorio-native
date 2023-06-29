import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import axios from 'axios';
import { useState } from "react";
import Lista from "./Lista";


export default function Inicio() {

    const [dados, setDados] = useState('')

    const mostrarDados = () => {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                setDados(response.data.results)
            }).catch((error) => {
                console.log('erro na requisição da api')
            })

    }
    return (
        <View>
            <Lista setDados={dados} />
            <View style={styles.container}>
                <TouchableOpacity onPress={mostrarDados} style={styles.button}>
                    <Text style={styles.buttonText} >Novo usuário </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    button: {
        borderRadius: 4,
        backgroundColor: '#2196F3',
        paddingVertical: 20,
        paddingHorizontal: 99,
        borderRadius: 3,


    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,

    },

});
