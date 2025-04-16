import { Text, View, SafeAreaView, Image, TextInput  } from "react-native";
import  SearchBar  from "@/components/searchBar";
import  styles  from "../assets/styles/styles";
import MainContainer from "@/components/container";

export default function Index() {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.appTitle}>Cozy Place</Text>
        <SearchBar/>

        <MainContainer>

        </MainContainer>
        
    </SafeAreaView>
  );
}

const APIKEY = "1299216cd8ab4642b26d4cc9a057eca9"
const url = `https://api.rawg.io/api/games?key=${APIKEY}`;

async function Api () {
    const response = await fetch(url);
    if (response.status === 200) {
      const obj = await response.json();
      console.log(obj)
    }

}

Api();
