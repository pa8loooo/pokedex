import { Link } from "expo-router";
import { CaretRight, Gear, MagnifyingGlass } from 'phosphor-react-native';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
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

        <View style = {styles.card}>
         <View style = {styles.cardInfo}>
           <Image source = {require("./assets/001.png")} style = {styles.image}/>
           <View>
             <Text>#001</Text>
             <Text>Bulbasaur</Text>
           </View>
          </View>

          <Link href={{
            pathname: "/pokemon/[id]",
            params: {id: "name"}
           }}>
            <CaretRight size = {32} />
          </Link>
           
       </View>
      </View>

      
      

      <View style = {styles.footer}>
        <Pressable style = {styles.buttonFooter}>
          <Text style = {styles.buttonText}>Conhecer um pokemon</Text>
        </Pressable>
      </View>
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
    elevation: 5,
    justifyContent: "space-between",
    borderRadius: 4,
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
})
