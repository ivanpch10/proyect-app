import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input}
      placeholder='Product'
      />
      <Button title="ADD"/>
      </View>
        <View style={styles.listContainer}>
          <View style={styles.cardProduct}>
            <Text style={styles.cardTitle}>Coca Cola</Text>
            <Text>2500 $</Text>
            <Button title= "DEL"></Button>
            </View>
            <View style={styles.listContainer}>
          <View style={styles.cardProduct}>
            <Text style={styles.cardTitle}>Fanta</Text>
            <Text>2200 $</Text>
            <Button title= "DEL"></Button>
            </View>
            <View style={styles.listContainer}>
          <View style={styles.cardProduct}>
            <Text style={styles.cardTitle}>Aquarius</Text>
            <Text>1800 $</Text>
            <Button title= "DEL"></Button>
            </View>
        </View>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 22,
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  input: {
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width:200,
  },
  listContainer:{
    
    width:"100%"
  },
  cardProduct: {
    flexDirection:"row",
    padding:10,
    margin:10,
    justifyContent:"space-around",
    alignItems: "center",
    borderWidth:4,
  },
  cardTitle:{

  }
});
