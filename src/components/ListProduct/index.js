import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import CardProduct from './CardProduct';

const ListProduct = ({ products, onProductUpdate, onModal }) => {
  const handleComplete = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, completed: true };
      }
      return product;
    });

    onProductUpdate(updatedProducts);
  };

  const handleModal = (item) => {
    onModal(item);
  };

  const renderProduct = ({ item }) => {
    const itemContainerStyle = [
      styles.itemContainer,
      item.completed && styles.completedItem, // Apply completedItem style if item is completed
    ];

    return (
      <View style={itemContainerStyle}>
        <CardProduct item={item} onModal={handleModal} />
        {!item.completed && (
          <Button
            title="Completado"
            onPress={() => handleComplete(item.id)}
            color="#007AFF" // Color del botón
          />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProduct}
      style={styles.flatList} // Estilo del FlatList
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  flatList: {
    width: '100%',
  },
  completedItem: {
    backgroundColor: 'lightgreen', // Style for completed items
    // Add other styles for completed items if needed
  },
});

export default ListProduct;
