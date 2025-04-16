import { StyleSheet } from "react-native";

const styles = StyleSheet.create (  {
    body: {
        flex: 1,
        backgroundColor: '#1a001a',
        alignItems: 'center'
    },

    appTitle: {
        marginTop: 80,
        textAlign: 'center',
        color: '#00BFFF',
        textShadowColor: '#FF13F0',
        textShadowRadius: 10,
        fontSize: 40,
        fontWeight: 'bold'

    },

    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },

    searchInput: {
        textAlign: 'center',
        color: '#F0F0F0',
        backgroundColor: '#000',
        shadowColor: '#9B4DFF',
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: '#9B4DFF',
        width: '200%',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 10
    },

    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#000',
        shadowColor: '#9B4DFF',
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: '#9B4DFF',
        width: '80%',
        height: 400,
        borderRadius: 20,
        marginTop: 80,
      },

    mainText: {
        color: '#F0F0F0',
        fontSize: 30,
        fontWeight: 'bold',

    }

});

    

export default styles