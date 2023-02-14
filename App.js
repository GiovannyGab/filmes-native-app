import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, ActivityIndicator} from "react-native";
import api from "./services/api";
import Films from "./src/Films";
export default function App() {
  const [films, setFilms] = useState([]);
  const [loading,setLoading]= useState(true)
  useEffect(() => {
    async function loadFilms() {
      const response = await api.get("r-api/?api=filmes");
      setFilms(response.data);
      setLoading(false)
    }
    loadFilms();
  }, []);
  if(loading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size={45} color="#121212"/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Films data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
