import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddProduct = ({
  valueTitle,
  valuePrice,
  valueQuantity,
  onChangeTitle,
  onChangePrice,
  onChangeQuantity,
  addProduct,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={valueTitle}
        onChangeText={(t) => onChangeTitle(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={valuePrice}
        keyboardType="numeric"
        onChangeText={(t) => onChangePrice(t)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={valueQuantity}
        onChangeText={(t) => onChangeQuantity(t)}
      />
      <Button
        title="ADD"
        onPress={addProduct}
        color="#007AFF" // Color del botón
      />
    </View>
  );
};

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
});

export default AddProduct;