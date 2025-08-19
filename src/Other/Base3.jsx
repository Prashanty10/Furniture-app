import React from 'react'
import { Text, View ,StyleSheet, Pressable, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";


const Base3 = ({navigation , route}) => {
  const {item} = route.params;

  return (
    <>
    <ScrollView style={{backgroundColor:"#6d6d6dff"}}>
    
   


    <SafeAreaView style={{backgroundColor:"white",flex:1}}>

       <View style={styles.headerRow}>
        
        <Pressable onPress={()=>navigation.push("Home")} style={{fontSize:25,fontWeight:700}}><Text
        style={{fontSize:25,fontWeight:700}}>FurnitureHub</Text></Pressable>
       
      </View>

      <View style={styles.backRow}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={28} color={'black'} />
        </Pressable>

        <Pressable>
          <FontAwesome name="heart-o" size={28} color="pink" />
        </Pressable>
      </View>
    <View>
        <Image style={styles.image} source={{uri:item.image}}/>
      </View>
    </SafeAreaView>

      <View style={{backgroundColor:"#6d6d6dff",flex:1,borderTopLeftRadius:50,borderTopRightRadius:50}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:30,}}>
          <Text style={{
            fontSize:22,
            fontWeight:700,
            marginTop:20,
            paddingHorizontal:10,
            color:"white",
            fontFamily:"serif"}}>{item.name}</Text>
            <Text style={{
            fontSize:20,
            fontWeight:700,
            marginTop:20,
            paddingHorizontal:20,
            color:"white",
            fontFamily:"serif"}}>₹ {item.price}</Text>
        </View>
        <Text
        style={{paddingHorizontal:10,fontSize:20,marginTop:20,color:"white",}}
        
        >{item.rating}  <Icon name="star" size={18} color="brown" /></Text>


        <Text style={{paddingHorizontal:5,fontSize:25,paddingVertical:10,
          fontWeight:700,fontFamily:"serif",color:"white",
        }}>
          Description
        </Text>
        <Text style={{paddingHorizontal:10,fontSize:18,color:"white",
          fontFamily:"Roboto"
        }}>{item.description}</Text>
      </View>

      <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  )
}

export default Base3

const styles = StyleSheet.create({


    headerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },

  backRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    marginTop:10
  },

  image:{
    height:hp("33%"),
    width:wp("100%"),
    resizeMode:"contain",
    borderRadius:15,
    
  },

 buttonContainer: {
    alignItems: "center",
    marginVertical: 25,
  },

  button: {
    backgroundColor: "#d0560bff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  
  },

  buttonText:{
    color:"white",
    fontWeight:600,
    fontSize:20,
    fontFamily:"serif"
  }

})
