import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
import Header from './Header';
import Product from './Product';
const ProductWrapper = () => {
  const products = [
    {
      id:1,
      name: 'Product1',
      description:'This is new Product ',
      price: 100,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      id :2,
      name: 'Product2',
      description:'This is new Product ',
      price: 200,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      id :3,
      name: 'Product3',
      description:'This is new Product ',
      price: 300,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      id :4,
      name: 'Product3',
      description:'This is new Product',
      price: 700,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      id :5,
      name: 'Product3',
      description:'This is new Product',
      price: 400,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      id :6,
      name: 'Product3',
      description:'This is new Product',
      price: 130,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      id :7,
      name: 'Product3',
      description:'This is new Product',
      price: 340,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
  ];
  return (
    <View style={styles.main}>
     <Header/>
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex :1,
    marginTop: 20,
  backgroundColor: '#d1d8ed',
  },
});

export default ProductWrapper;
