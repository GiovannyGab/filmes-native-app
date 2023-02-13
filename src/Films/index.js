import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import ModalScreen from "../Modal";

export default function Films({ data }) {
  const[visibleModal,setVisibleModal]= useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={{ uri: data.foto }} style={styles.imageCape} />

        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btn} onPress={()=>setVisibleModal(true)}>
            <Text style={styles.textBtn}>Leia Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" visible={visibleModal} transparent={true}>
      <ModalScreen data={data} voltar={()=>setVisibleModal(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
flex:1,
marginTop:20
  },
  card: {
    margin: 15,
    backgroundColor: "#484A49",
    elevation: 2,
  },
  title: {
    padding: 15,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  imageCape: {
    height: 250,
    zIndex: 2,
  },
  areaBtn:{
    alignItems:"flex-end",
    marginTop:-45,
    zIndex:3
  },
  btn:{
    width:100,
    backgroundColor:"#09A6FF",
    opacity:1,
    padding:8,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5
  },
  textBtn:{
    color:"#fff",
    textAlign:"center"
  }
});
