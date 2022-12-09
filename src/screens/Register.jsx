import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import icon from '../../assets/logo.png';


export default function Register(props) {
  const NavigateCounter = () => {
    props.navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Image
      source={icon}
      style={{width: 50, height: 50}}
      />
      <Text style={styles.main}>Register</Text>
      <TextInput style={styles.login} placeholder="Name"></TextInput>
      <TextInput style={styles.login} placeholder="LastName"></TextInput>
      <TextInput style={styles.login} placeholder="Photo"></TextInput>
      <TextInput style={styles.login} placeholder="Age"></TextInput>
      <TextInput style={styles.login} placeholder="Email"></TextInput>
      <TextInput style={styles.login} placeholder="Password"></TextInput>
      <TouchableOpacity 
        onPress={()=>{
          Alert.alert('Your account was created. Check your email to validate it!')
          props.navigation.navigate('Login');
        }}
      style={styles.btn_menu}>
        <Text style={styles.btn_text}>
          Register
        </Text>
      </TouchableOpacity>
      <Text style={styles.submain}>¿You already have an account? ¡Login now! </Text>
      <TouchableOpacity 
      onPress={NavigateCounter}
      style={styles.btn_register}>
        <Text style={styles.btn_text}>
          Login
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    fontSize: 30,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    paddingBottom: 20,
    marginTop: 13,
  },
  submain:{
    fontSize: 18,
    marginTop: 3,
    padding: 7,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btn_menu:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
    backgroundColor: 'purple',
    marginTop: 15,
    margin: 5,
  },
  btn_register:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
    backgroundColor: 'purple',
    margin: 5,
  },
  btn_text:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 20,
  },
  login:{
    backgroundColor: 'white',
    width: 250,
    height: 38,
    margin: 5,
   textAlign: 'center',
   borderRadius: 100,
   overflow: 'hidden',
   fontSize: 20,
  }
});