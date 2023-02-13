import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ModalScreen(props) {
 return (
    
   <View style={styles.container}>
   <View style={styles.modalContainer}>
   <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
   <Text style={{color:"#fff", fontSize:16}}>Voltar</Text>
   </TouchableOpacity>

   <Text style={styles.titulo}>{props.data.nome}</Text>
   <Text style={styles.sinopse}>{props.data.sinopse}</Text>
   <Text style={styles.descricao}>{props.data.descricao}</Text>
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
    },
    btnVoltar:{
        backgroundColor:"#E52246",
        padding:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    titulo:{
        textAlign:'center',
        fontSize:26,
        color:"#FFF",
        padding:10,
        fontWeight:'bold'
    },
    sinopse:{
        color:"#fff",
        fontSize:18,
        marginBottom:8,
        marginLeft:10,
    },
    descricao:{
        color:"#fff",
        marginLeft:10,
        marginRight:10
    }
})