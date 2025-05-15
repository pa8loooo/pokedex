import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { api } from "../services/api";

interface Props {
    name: string | null;
}

export default function Pokemon ({name}: Props){
    const [pokemon, SetPokemon] = useState<any>(null);

    useEffect(() => {
        const loadPokemon = async () => {
            const response = await api.get(`/pokemon/${name}`);
            SetPokemon(response.data);
        };
        loadPokemon();
    }, [name]);

    if (!pokemon) {
        return <Text>Carregando informações do pokemon</Text>;
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image source={{uri: pokemon.sprite.front_default }} style = {{ width: 100, height: 100 }} />
            </View>

            <Text style = {styles.namePokemon}>{name}</Text>

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

            <View style = {styles.footer}>
              <View style = {styles.footerCardContainer}>
                 <View style = {styles.footerCard}>
                      <Image source={require("../assets/001.png")} style = {styles.image} />
                      <Text>Bulbasaur</Text>
                  </View>
                 
                 <View style = {styles.footerCard}>
                     <Image source={require("../assets/002.png")} style = {styles.image} />
                     <Text>Ivysaur</Text>
                 </View>
                 
                 <View style = {styles.footerCard}>
                     <Image source={require("../assets/003.png")} style = {styles.image} />
                     <Text>Venusaur</Text>
                 </View>
                 
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
        padding: 20,
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
        marginBottom: 20,
    },
    footer:{
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "space-between"
    },
    footerCardContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "space-between",
    },
    footerCard:{
        backgroundColor: "#FFF",
        padding: 15,
        borderWidth: 2,
        borderColor: "#F2F2F2",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    }
})