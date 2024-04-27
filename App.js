import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TextInput} from 'react-native';

import Bai1 from './Tuan03/Week3-Ex1'
const App = () => {
  return (
    <View style = {styles.container}>
      <Week3-Ex1/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});

export default App;