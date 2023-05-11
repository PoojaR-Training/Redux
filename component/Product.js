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
    <View
      style={{borderBottomColor: 'orange', borderBottomWidth: 5, padding: 10}}>
      <View style={styles.product}>
        <Text style={styles.productItem}>Product Name :{item.name}</Text>
        <Text style={styles.productItem}>Product Price :{item.price}</Text>
        <Image style={{height: 100, width: 100}} source={{uri: item.image}} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => handleAddToCart(item)}>
            <Text style={styles.btn}> + </Text>
          </TouchableOpacity>

          <ProductCart itemId={item.id} />

          <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
            <Text style={styles.btn}> - </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    fontSize: 20,
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productItem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    fontSize: 30,
    backgroundColor: '#8888eb',
    fontWeight: 'bold',
    padding: 5,
    margin: 10,
  },
});

export default Product;
