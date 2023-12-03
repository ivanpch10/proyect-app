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
       keyboardType="numeric"
       onChangeText={(t)=> onChangePrice(t)}
       />
       <TextInput 
       style={styles.input}
       placeholder='Cantidad'
       keyboardType="numeric"
       value={valueQuantity}
       onChangeText={(t)=> onChangeQuantity(t)}
       />
       <Button 
       title="ADD" 
       onPress={addProduct}
       style={styles.addButton}
       titleStyle={styles.addButtonText}
       //onPress={()=> console.log(`El Producto agregado es: ${newTitleProduct} y su Precio es: ${newPriceProduct}`)}
       />
     </View>
 ); };
 const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
 
 })

export default AddProduct