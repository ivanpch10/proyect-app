import {Modal, View, Text, Button,StyleSheet} from "react-native"

const ModalDelete = ({product,visible, onModal, onDelete}) => {

   
  return (     <Modal 
    visible={visible}
>
    <View style={styles.modalContainer}>   
        <View style={styles.modalContent}>
            <Text style={styles.modalText}>Está seguro que desea eliminarlo?</Text>
            <Text style={styles.modalText}>{product.title}</Text>
        <View style={styles.modalButtons}>
            <Button title="Confirmar" onPress={onDelete}/>
            <Button title="Cerrar" onPress={()=>onModal(false)}/>
        </View>
        </View>
    </View>
</Modal> 
);};

const styles = StyleSheet.create({
modalContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
width: "80%",
borderWidth: 2,
padding: 10,
gap: 10,
borderColor: 'blue', // Por ejemplo, un nuevo color para el borde
borderRadius: 8, // Agregando bordes redondeados
backgroundColor: 'white', // Cambiando el color de fondo del contenido modal
},
modalText: {
marginBottom: 20,
fontSize: 18,
},
modalButtons: {
flexDirection: 'row',
justifyContent: 'space-around',
width: '100%',
marginTop: 10,
},
})
export default ModalDelete