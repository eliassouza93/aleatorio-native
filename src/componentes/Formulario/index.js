import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";


export default function Formulario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const EnviarFormulario = () => {
        console.log('nome: ' + nome + ' || ' + 'Email: ' + email)
        setNome('')
        setEmail('')
        if (nome == '') {
            alert('digite seu nome')
        }
        else {
            alert(nome + ' seus dados foram enviados')
        }


    }

    return (
        <View style={estilo.container}>
            <Text style={estilo.texto}>Nome</Text>
            <TextInput
                style={estilo.input}
                value={nome}
                onChangeText={(texto) => setNome(texto)}
                placeholder="Digite seu nome"
                required
            />
            <Text style={estilo.texto}>Email</Text>
            <TextInput
                style={estilo.input}
                value={email}
                onChangeText={(texto) => setEmail(texto)}
                placeholder="Digite seu email"
                required

            />
            <TouchableOpacity style={estilo.botao} onPress={EnviarFormulario}>
                <Text style={estilo.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
};

const estilo = StyleSheet.create({
    container: {
        flex: 1,
         
    
        paddingHorizontal: 20,
    },
    texto: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    botao: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 5,
    },
    botaoTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

