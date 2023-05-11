import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView,Alert} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const [count, setCount] = useState(0);
  const cartData = useSelector(state => state.reducer);
  useEffect(() => {
    setCount(cartData.length);
  }, [cartData]);
  return (
    <View>
      {
        cartData.length === 0? (
      null
        ) : (
          <Text style={styles.main}>{count} Item in Cart</Text>
        )
      }
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    textAlign: 'right',
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: 'lightblue',
    width :"100%",
    marginBottom : 10,
  },
});

export default Header;
