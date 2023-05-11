import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProductWrapper from './component/ProductWrapper';
import UserList from './component/UserList';
const App = () => {
 
  return (
   <ProductWrapper />
  );
};

export default App;
