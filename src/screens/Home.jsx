import { StatusBar } from 'expo-status-bar';
import { Alert, Touchable, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import icon from '../../assets/logo.png';


export default function Home(props) {
  const NavigateCounter = () => {
    props.navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D0179',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main:{
    fontSize: 50,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    paddingBottom: 20,
    marginTop: 13,
  },
  submain:{
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  btn_menu:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'purple',
    marginTop: 55,
    margin: 5,
  },
  btn_text:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 30,
  }
});