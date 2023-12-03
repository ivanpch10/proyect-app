import { StatusBar } from 'expo-status-bar';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,FlatList,Modal } from 'react-native';
import ModalDelete from "./src/components/ModalDelete" // no se por que me lo marca en rojo, porque creo está todo correcto. 
import AddProduct from './src/components/AddProduct';
import ListProduct from './src/components/ListProduct';

export default function App() {
  const [newTitleProduct, setNewTitleProducts] = useState("")
  const [newPriceProduct, setNewPriceProducts] = useState("")
  const [newQuantityProduct, setNewQuantityProducts] = useState("")
  const [products, setProducts] = useState([])
  const [productSelected, setproductSelected] = useState({}) 
  const [modalVisible, setModalVisible] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false);

  const handlerAddProduct = () => {
      //setProducts([...products, {title:newTitleProduct,price:newPriceProduct}])
      const newProduct = { //objeto con produdctos
        id: uuidv4(), //id para producto que viene de uuid importado
        title:newTitleProduct,
        price:newPriceProduct,
        quantity:newQuantityProduct,
      }
      setProducts(current => [...current, newProduct]) //current para prod guardados antes, new para nuevos
      setNewTitleProducts("") //vacio productos
      setNewPriceProducts("") //vacio precio
      setNewQuantityProducts("")
      setIsCompleted(true)
    }

    const handlerModal = (item) => { //cuando quiero borrar, seteo el producto que voy a borrar
        console.log(item) //para consologuear que item quiero eliminar
        setproductSelected(item)
        setModalVisible(!modalVisible)
    }
    
    const handlerDeleteProduct = () => {
        setProducts(current => current.filter(product => product.id !== productSelected.id)) //agarra prod actuales y filtra por el id que sea igual al prod seleccionado
        setModalVisible(false)
      }
return (
  <View style={styles.container}>
    <AddProduct
    style ={styles.inputContainer}
      valueTitle = {newTitleProduct}
      valuePrice = {newPriceProduct}
      valueQuantity = {newQuantityProduct}
      onChangeTitle = {setNewTitleProducts}
      onChangePrice = {setNewPriceProducts}
      onChangeQuantity = {setNewQuantityProducts}
      addProduct = {handlerAddProduct}
    />
    {/* flatlist con items que se destructuran y listas de productos q devuelve componentes*/}

    <Button
      title={isCompleted ? 'Completado' : 'Agregar'}
      onPress={isCompleted ? undefined : handlerAddProduct}
      style={isCompleted ? styles.completedButton : styles.addButton}
      titleStyle={isCompleted ? styles.completedButtonText : styles.addButtonText}
    />

      <ListProduct
        products = {products}
        onModal = {handlerModal}
      />

      <ModalDelete
          product = {productSelected} 
          visible = {modalVisible}
          onModal = {handlerModal}
          onDelete = {handlerDeleteProduct}
      />
    
         
    <StatusBar style="auto" />
  </View>
);
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: 30,
  backgroundColor: '#f0f0f0',
  paddingHorizontal: 20,
},
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
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
completedButton: {
  backgroundColor: 'green', // Estilo para el botón completado
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 5,
  alignItems: 'center',
},
completedButtonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
},
});




