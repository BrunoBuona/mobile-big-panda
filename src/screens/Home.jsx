import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const imagenes = [
  "https://media-cdn.tripadvisor.com/media/photo-s/25/fb/8c/46/hotel-exterior.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
  "https://www.cronista.com/files/image/307/307126/5ffe2f4705222.jpg",
  "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/E3RZXK3LZJHCLOEHX2E2MAPWRE.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/25/3c/0e/b9/exterior.jpg",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: '125%',
          top: 0,
          width: width,
          backgroundColor: '#4D0179'
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {imagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default function App(props) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const NavigateCounter = () => {
    props.navigation.navigate('Hotels');
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <Backdrop scrollX={scrollX} />
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          snapToAlignment="start"
          contentContainerStyle={{
            paddingTop: 200,
            paddingHorizontal: ESPACIO_CONTENEDOR,
          }}
          snapToInterval={ANCHO_CONTENEDOR}
          decelerationRate={0}
          scrollEventThrottle={16}
          data={imagenes}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
              (index + 1) * ANCHO_CONTENEDOR,
            ];

            const scrollY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0],
            });
            return (
              <View style={{ width: ANCHO_CONTENEDOR }}>
                <Animated.View
                  style={{
                    alignItems: "center",
                    transform: [{ translateY: scrollY }],
                  }}
                >
                  <Image source={{ uri: item }} style={styles.posterImage} />
                </Animated.View>
              </View>

            );
          }}
        />
      </SafeAreaView>
      <View style={styles.ctahotelsdiv} >
        <Text style={styles.ctahotels}>¿Want to check someone specific?</Text>
      <TouchableOpacity 
      onPress={NavigateCounter}
      
      style={styles.btn_menu}>
        <Text style={styles.btn_text}>
          SEE HOTELS
        </Text>
      </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: 200 * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  ctahotelsdiv:{
   display: 'flex',
   justifyContent: 'center',
   bottom: 60,
  },
  ctahotels:{
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
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