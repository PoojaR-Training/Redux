import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const ProductCart = ({ itemId }) => {
    const count = useSelector(state => state.reducer.filter(item => item.id === itemId).length);
    return (
      <View>
        <Text style={styles.btn}>{count}</Text>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  btn: {
    fontSize: 25,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    padding: 5,
    margin: 10,
  },
});
export default ProductCart;
