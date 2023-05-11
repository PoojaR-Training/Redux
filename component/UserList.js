import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserList = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>UserList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#dee1e3',
  },
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
  },
});

export default UserList;
