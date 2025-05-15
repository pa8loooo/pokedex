import { CaretRight, Gear, MagnifyingGlass } from 'phosphor-react-native';
import { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Modal from "react-native-modal";
import Pokemon from './pokemon/[id]';
import { fetchPokemons } from "./services/api";
import { PokemonListItem } from "./types/pokemon";

const { height } = Dimensions.get("window");

export default function Index() {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const toggleModal = (pokemonName?: string) => {
    if (pokemonName){
      setSelectedPokemon(pokemonName);
    }
    setModalVisible(!isModalVisible);
  }

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemons();
      const fetchPokemonsData: PokemonListItem[] = await Promise.all(
        data.map(async (item: {name: string; url: string}) => {
          const response = await fetch(item.url);
          const details = await response.json();

          return{
            name: item.name,
            image: details.sprites.front_default,
          };
        })
      );

      setPokemons(fetchPokemonsData);
    };

    loadPokemons();
  },[]);

  console.log(selectedPokemon);


  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.logo}>Pokédex</Text>
        <Gear size={32} color="#FFF" />
      </View>
      <Text style = {styles.info}>Encontre seu pokemon pesquisando pelo nome ou por seu Código Pokédex.</Text>

      <View style = {styles.inputContainer}>
        <MagnifyingGlass size = {32} color="#FFF"/>
        <TextInput placeholder="Pesquisar" placeholderTextColor="#FFF" style={styles.input}/>
      </View>

      <View style = {styles.content}>
        <Text style = {styles.contentText}>Todos os pokemons</Text>

        <FlatList 
          data = {pokemons} 
          keyExtractor={(item) => item.name} 
          renderItem= {({item, index }) => (
          <Pressable onPress = {() => toggleModal(item.name)} style = {styles.card}>
            <View style = {styles.cardInfo}>
              <Image width= {80} height = {80} source = {{uri: item.image}} style = {styles.image}/>
                <View>
                <Text>#{index + 1}</Text>
                <Text>{item.name}</Text>
              </View>
             </View>
               <CaretRight size = {32} />
           </Pressable>
            )}
        />        
      </View>

      <View style = {styles.footer}>
        <Pressable style = {styles.buttonFooter}>
          <Text style = {styles.buttonText}>Conhecer um pokemon</Text>
        </Pressable>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal()}
        swipeDirection={"down"}
        onSwipeComplete={() => toggleModal()}
        style={styles.modal}
      >
        <View style = {styles.modalContent}>
          <Pokemon name = {selectedPokemon}/>
        </View>
      </Modal>

    </View>
  );
}

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F7776A",
  },
  header:{
    paddingHorizontal: 25,
    paddingTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logo:{
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  info:{
    color: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainer:{
    backgroundColor: "#F98E80",
    margin: 20,
    borderRadius: 4,
    flexDirection: "row",
    padding: 10,
    gap: 15,
    alignItems: "center",
    marginBottom: 25,
  },
  input:{
    flex: 1,
  },
  content:{
    flex: 1,
    backgroundColor: "#FFF",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 15,
  },
  footer:{
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderColor: "#F2F2F2",
    padding: 25,
  },
  buttonFooter:{
    backgroundColor: "#F7776A",
    padding: 15,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 6,
  },
  buttonText:{
    color: "#FFF",
  },
  card:{
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between",
    borderRadius: 4,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },
  cardInfo:{
    flexDirection: "row",
    alignItems: "center",
  },
  image:{
    width: 64,
    height: 64,
  },
  contentText:{
    fontSize: 20, 
    fontWeight: "bold",
    paddingBottom: 20,
  },
  modal:{
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent:{
    height: height * 0.8,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    padding: 20,
    backgroundColor: "#FFF",
  },
})
