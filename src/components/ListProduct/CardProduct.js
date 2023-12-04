import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CardProduct = ({ item, onModal }) => {
  return (
    <View style={styles.cardProduct}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Nombre</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Precio</Text>
        <Text style={styles.cardInfo}>{item.price} $</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Cantidad</Text>
        <Text style={styles.cardInfo}>{item.quantity}</Text>
      </View>
      <Button title="DEL" onPress={() => onModal(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardProduct: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemTitle: {
    fontWeight: 'bold',
    width: 70,
  },
  cardTitle: {
    flex: 1,
  },
  cardInfo: {
    marginLeft: 8,
  },
});

export default CardProduct;

