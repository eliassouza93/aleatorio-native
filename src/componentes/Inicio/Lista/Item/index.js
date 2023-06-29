import { View, Text, Image, StyleSheet } from "react-native"

export default function Item({ cell, picture, name, location, phone, email }) {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: picture.large }} style={styles.image} />
                </View>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.text}>{name.first} {name.last}</Text>
                <Text style={styles.label}>Cidade:</Text>
                <Text style={styles.text}>{location.city}</Text>
                <Text style={styles.label}>Estado:</Text>
                <Text style={styles.text}>{location.state}</Text>
                <Text style={styles.label}>País:</Text>
                <Text style={styles.text}>{location.country}</Text>
                <Text style={styles.label}>Celular:</Text>
                <Text style={styles.text}>{cell}</Text>
                <Text style={styles.label}>Telefone fixo:</Text>
                <Text style={styles.text}>{phone}</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
    },
    imageContainer: {
        marginBottom: 10,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
        marginBottom: 10,
    },
});
