import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TextInput, Text, Image, ViewBase } from 'react-native';
import { BASE_URL } from '../api/url';
import { useEffect, useState } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



export default function Hotel(props) {
  const [hotels, setHotels] = useState([])
  
  async function fetchHotels() {
    await axios.get(`${BASE_URL}/api/hotels`).then((response) => {
      setHotels(response.data.response)
      console.log(setHotels)
    })
  }
  useEffect(() => {
    fetchHotels()
  }, [])
  function goToDetails() {
    props.navigation.navigate('Details')
  }
  return (
    <View style={styles.container}>
        <TextInput placeholder='Busqueda' style={styles.filter_name}></TextInput>
      <ScrollView>
     {hotels.map((hotel) => {
        return (
            <Card style={styles.padding}>
              <Card.Content>
                <Title style={styles.noborder}>{hotel.name}</Title>
              </Card.Content>
              <Card.Cover style={styles.noborder} source={{ uri: `${hotel.photo[0]}` }} />
                <Button onPress={goToDetails}>See More</Button>
            </Card>
          )})}
          </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D0179',
    alignItems: 'center',
  },
  filter_name: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderRadius: 50,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,

  },
  search: {
    width: 300,
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 50,
    marginTop: 15,
    padding: 5
  },
  padding:{
    margin: 10,
  },
  noborder:{
    borderRadius: 0,
    textAlign: 'center',
  }
})