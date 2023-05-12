import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {addToCart, removeFromCart} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
import ProductCart from './ProductCart';
const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector(state => state.reducer);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };
  useEffect(() => {
    let result = cartItems.filter(el => {
      return el.name === item.name;
    });
    if (result.length > 0) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={{flex: 1}}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <ProductCart itemId={item.id} />
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveFromCart(item)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#33cc33',
    borderRadius: 5,
    padding: 10,
  },
  removeButton: {
    backgroundColor: '#ff0000',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Product;
