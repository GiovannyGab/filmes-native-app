import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ModalScreen() {
 return (
    
   <View style={styles.container}>
   <View style={styles.modalContainer}>
   <TouchableOpacity style={styles.btnVoltar}>
   <Text style={{color:"#fff", fontSize:16}}>Voltar</Text>
   </TouchableOpacity>

   <Text style={styles.titulo}>titulo</Text>
   <Text style={styles.sinopse}>sinopse:</Text>
   <Text style={styles.descricao}>descriçao:</Text>
   </View>
   
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
       marginLeft:10,
       marginRight:10,
       flex:1,
       alignItems:'center',
       justifyContent:'flex-end' 
    },
    modalContainer:{
        height:"80%",
        backgroundColor:"#121212",
        borderBottomLeftRadius:5,
        borderTopRightRadius:5,
    }
})