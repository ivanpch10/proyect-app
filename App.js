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
      }

      const handlerModal = (item) => { //cuando quiero borrar, seteo el producto que voy a borrar
          console.log(item) //para consologuear que item quiero eliminar
          setproductSelected(item)
          setModalVisible(true)
      }
      
      const handlerDeleteProduct = () => {
          setProducts(current => current.filter(product => product.id !== productSelected.id)) //agarra prod actuales y filtra por el id que sea igual al prod seleccionado
          setModalVisible(false)
        }
  return (
    <View style={styles.container}>
      <AddProduct
        valueTitle = {newTitleProduct}
        valuePrice = {newPriceProduct}
        valueQuantity = {newQuantityProduct}
        onChangeTitle = {setNewTitleProducts}
        onChangePrice = {setNewPriceProducts}
        onChangeQuantity = {setNewQuantityProducts}
        addProduct = {handlerAddProduct}
      />
      {/* flatlist con items que se destructuran y listas de productos q devuelve componentes*/}
       
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
//ejemplo anterior 
 {/* <View style={styles.cardProduct}>
            <Text style={styles.cardTitle}>Coca Cola</Text>
            <Text>2500 $</Text>
            <Button title= "DEL"></Button>
            </View>//
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
      </View> */}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 30,
  },
});



