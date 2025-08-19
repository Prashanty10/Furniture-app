import React from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Image } from 'react-native'

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.box1}>
          <Image 
            style={styles.logo} 
            source={{uri:"https://sdmntprcentralus.oaiusercontent.com/files/00000000-7ba4-61f5-ab81-6e6563915434/raw?se=2025-08-17T10%3A53%3A08Z&sp=r&sv=2024-08-04&sr=b&scid=05ef4285-d150-5525-b312-f2c31d9bff61&skoid=5c72dd08-68ae-4091-b4e1-40ccec0693ae&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-17T09%3A16%3A12Z&ske=2025-08-18T09%3A16%3A12Z&sks=b&skv=2024-08-04&sig=9vvalMZnKONxCGvs%2BiOH2JtRilPErwLdpT4b4ZltvPM%3D"}} 
          />
          <Text style={styles.heading}>Register</Text>

          <View style={{ marginTop: 40, gap: 25 }}>
            <TextInput style={styles.input} placeholder="Full Name" />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
          </View>

          <Pressable 
            onPress={() => navigation.navigate("Home")}
            style={styles.registerBtn}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Register</Text>
          </Pressable>

          <View style={{ marginTop: 25, flexDirection: "row", gap: 5 }}>
            <Text style={{ fontSize: 18 }}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eed3abff",
    alignItems: "center",
    justifyContent: "center"
  },

  box: {
    backgroundColor: "white",
    height: hp("85%"),
    width: wp("90%"),
    borderRadius: 30,
    alignItems: "center"
  },

  box1: {
    alignItems: "center"
  },

  logo: {
    height: hp("20%"),
    width: wp("40%"),
    marginTop: 20
  },

  heading: {
    fontSize: 38,
    fontWeight: "700",
    fontFamily: "serif"
  },

  input: {
    borderWidth: 1,
    width: wp("70%"),
    padding: 12,
    borderRadius: 10
  },

  registerBtn: {
    marginTop: 30,
    backgroundColor: "#8A4E2A",
    padding: 12,
    width: wp("40%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  }
})
