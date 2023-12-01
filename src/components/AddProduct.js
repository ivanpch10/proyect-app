import {View, TextInput, Button, StyleSheet} from "react-native"

const AddProduct = ({valueTitle, valuePrice, valueQuantity, onChangeTitle, onChangePrice, onChangeQuantity, addProduct}) => {
   return (
   <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input}
      placeholder="Nombre"
      value={valueTitle}
      onChangeText={(t)=> onChangeTitle(t)}
      />
      <TextInput 
      style={styles.input}
      placeholder='Precio'
      value={valuePrice}
      onChangeText={(t)=> onChangePrice(t)}
      />
      <TextInput 
      style={styles.input}
      placeholder='Cantidad'
      value={valueQuantity}
      onChangeText={(t)=> onChangeQuantity(t)}
      />
      <Button title="ADD" onPress={addProduct}
      //onPress={()=> console.log(`El Producto agregado es: ${newTitleProduct} y su Precio es: ${newPriceProduct}`)}
      />
    </View>
); };
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        alignItems: "center",
        width:"100%",
        justifyContent: "space-around"
      },
      input: {
        borderWidth: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width:200,
        margin:10,
      }
})

export default AddProduct