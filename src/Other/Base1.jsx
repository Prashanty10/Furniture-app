import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const product = [
  { id: "1", name: "ALL" },
  { id: "2", name: "Chair" },
  { id: "3", name: "Sofa" },
  { id: "4", name: "Lamp" },
  { id: "5", name: "Curtains" },
  { id: "6", name: "Table" },
  { id: "7", name: "Study Chair" },
];

const Base1 = () => {
  return (
  
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}>
        {product.map((item) => (
          <View key={item.id} style={styles.box}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    
  );
};

export default Base1;

const styles = StyleSheet.create({
  scroll: {
    flexDirection:"row",
    paddingHorizontal:10,
    marginTop:30
  },
   
  box: {
    paddingHorizontal:10,
   
    
  },
  text: {
    fontSize:18,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:15,
     backgroundColor:"#8A4E2A",
     color:"white"
  },
});
