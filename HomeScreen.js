
import React from 'react';
import { Button, View, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './Tuan06/Program1/store.js';




const HomeScreen = ( props ) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => props.navigation.navigate('AllWeek3')}>
            <Text style={styles.buttonText}>Baì tập tuần 3 </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => props.navigation.navigate('AllWeek4')}>
            <Text style={styles.buttonText}>Baì tập tuần 4 </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => props.navigation.navigate('AllWeek5')}>
            <Text style={styles.buttonText}>Baì tập tuần 5 </Text>
      </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => props.navigation.navigate('AllWeek6')}>
              <Text style={styles.buttonText}>Bai tập tuần 6</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => props.navigation.navigate('Navigator')}>
              <Text style={styles.buttonText}>Bai tập tuần 7</Text>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth : 2,
    borderColor: 'blue',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default HomeScreen;
