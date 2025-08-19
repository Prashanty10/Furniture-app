import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Welcome = ({ navigation }) => {

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigation.navigate("Home")  
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={{uri:"https://sdmntprwestus2.oaiusercontent.com/files/00000000-4d50-61f8-bdca-71268d71b4dd/raw?se=2025-08-17T07%3A45%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=be2a4d1a-ff9e-5481-b54c-c892b0b2256f&skoid=7399a3a4-0259-4d43-bcd6-a56ceeb4c28b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T23%3A46%3A24Z&ske=2025-08-17T23%3A46%3A24Z&sks=b&skv=2024-08-04&sig=s3ryg5zbZ%2B6QC9R5hI6VJqNG4VAQ0Jvp1qZf374PK4Q%3D"}} 
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to FurnitureHub</Text>  
        <Text style={styles.subtitle}>Choose better comfort</Text>     
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eed3abff",
    alignItems: "center", 
    justifyContent: "center"
  },

  logoContainer: {
    alignItems: "center"
  },

  logo: {
    height: hp("25%"),
    width: wp("55%"),
    marginBottom: 15
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "serif"
  },

  subtitle: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "serif"
  }
})
