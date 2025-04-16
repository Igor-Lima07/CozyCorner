import useState from "react";
import {  View, Image, TextInput  } from "react-native";
import  styles  from "../assets/styles/styles";

const SearchBar = () => {

  return (
      <View style={styles.searchContainer}>
          <TextInput
              style={styles.searchInput}
              placeholder='Buscar Jogo...'
              placeholderTextColor='#fff'
              value={''}
          />
      </View>
  );
};
export default SearchBar
