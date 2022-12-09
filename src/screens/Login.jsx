import { StatusBar } from 'expo-status-bar';
import { Alert, Touchable, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import icon from '../../assets/logo.png';
import {useForm, Controller} from 'react-hook-form';

export default function Login(props) {
  const NavigateCounter = () => {
    props.navigation.navigate('Register');
  }
  const {control, handleSubmit, errors, setValue, getValues} = useForm()
  const onSubmit = (data) => {};
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return (
    <View style={styles.container}>
      <Image
      source={icon}
      style={{width: 50, height: 50}}
      />
      <Text style={styles.main}>Login in</Text>
      <TextInput style={styles.login} placeholder="Email"></TextInput>
      <TextInput style={styles.login} placeholder="Password"></TextInput>
      <TouchableOpacity 
        onPress={()=>
          {
            Alert.alert('Logged in successfully!')
            props.navigation.navigate('Home');
          }}
      style={styles.btn_menu}>
        <Text style={styles.btn_text}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.submain}>¿You dont have an account? ¡Sign up now!</Text>
      <TouchableOpacity 
      onPress={NavigateCounter}
      style={styles.btn_register}>
        <Text style={styles.btn_text}>
          Register
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
    paddingHorizontal: 25,
    paddingVertical: 10,
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
    marginTop: 25,
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
    height: 40,
    margin: 5,
   textAlign: 'center',
   borderRadius: 100,
   overflow: 'hidden',
   fontSize: 20,
  }
});