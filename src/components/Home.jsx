import React from "react";
import { View, TextInput, StyleSheet, Pressable,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Base1 from "../Other/Base1";
import Base2 from "../Other/Base2";
import Base3 from "../Other/Base3";



const Home = ({navigation}) => {
  return (
    <SafeAreaView>
     
      <View style={styles.headerRow}>
        <Pressable onPress={()=>navigation.navigate("Login")}>
            <FontAwesome name="user-circle" size={40} color="#8A4E2A" />
        </Pressable>
        <Pressable onPress={()=>navigation.push("Home")} style={{fontSize:25,fontWeight:700}}><Text
        style={{fontSize:25,fontWeight:700}}>FurnitureHub</Text></Pressable>
        <Entypo name="shopping-cart" size={30} color="black" />
      </View>

     
      <View style={styles.searchContainer}>
        <Feather name="search" size={22} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>
        <View>
            <Base1/>
        </View>
    <View>
    <Base2/>
    </View>
      
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#000",
  },
});
