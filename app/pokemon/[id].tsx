import { Image, StyleSheet, Text, View } from "react-native";

export default function Pokemon (){
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image source={require("../assets/001.png")} style = {styles.image} />
            </View>

            <Text style = {styles.namePokemon}>Bulbasaulr</Text>

            <View style = {styles.infoPokemon}>
                <View style = {styles.info}>
                <Text style = {styles.infoText1}>0.9m</Text>
                <Text style = {styles.infoText2}>Altura</Text>
                </View>
                <View style = {styles.info}>
                <Text style = {styles.infoText1}>6.9kg</Text>
                <Text style = {styles.infoText2}>Peso</Text>
                </View>
            </View>

            <Text style = {styles.textEvolutions}>Evoluções</Text>

            <View style = {styles.infoPokemon}>
                <View style = {styles.info}>
                <Text style = {styles.infoText1}>0.9m</Text>
                <Text style = {styles.infoText2}>Altura</Text>
                </View>
                <View style = {styles.info}>
                <Text style = {styles.infoText1}>6.9kg</Text>
                <Text style = {styles.infoText2}>Peso</Text>
                </View>
            </View>

        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        padding: 25,
    },
    header: {
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center",
        padding: 25,
        borderRadius: 6,
    },
    image: {
        width: 64,
        height: 64,
    },
    namePokemon: {
        fontSize: 25,
        marginVertical: 20,
        fontWeight: "bold",
    },
    infoPokemon:{
        flexDirection: "row",
        gap: 15,
    },
    info:{
        padding: 25,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#F3F3F3", 
        justifyContent: "center",
        alignItems: "center",
    },
    infoText1:{
        fontSize: 20,  
        fontWeight: "bold",
    },
    infoText2:{
        fontSize: 15,
    },
    textEvolutions:{
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 20,
    }
})