import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ShopScreen from '../screens/ShopScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailScreen from '../screens/DetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FilterScreen from '../screens/FilterScreen';

import LoginScreen from '../ProfileScreen/LoginScreen'
import RegisterScreen from '../ProfileScreen/RegisterScreen'
import ForgotPWScreen from '../ProfileScreen/ForgetPWScreen'

import BagScreen from '../BagScreen/BagScreen'

import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Font from 'expo-font';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

Font.loadAsync({
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Roboto-Bold' : require('../assets/fonts/Poppins-Bold.ttf')
});

const MyTheme = {
  dark: false, 
  colors: {
    primary: '#DB3022', 
    background: 'white',
    card: '#F9F9F9F9',
    text: 'black', 
    border: 'rgba(0, 0, 0, 0.1)', 
  },
  fonts: {
    regular: 'Poppins-Regular', 
    medium: 'Poppins-Medium', 
  },
};
const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Shop' component={ShopScreen} />
      <Stack.Screen name='Product' component={ProductsScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ForgotPW' component={ForgotPWScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const FavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='FavouritesScreen' component={FavouritesScreen} />
    </Stack.Navigator>
  );
};
const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='BagScreen' component={BagScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

const ShopTab = () => {
  const defaultIconSize = 33;
  const focusedIconSize = 35;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = focused ? '#DB3022' : color;
          const iconSize = focused ? focusedIconSize : defaultIconSize;
          if (route.name === 'Shop') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Bag') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } 
          
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarLabelStyle: { fontSize: 14, fontWeight: '400' }, 
        tabBarActiveTintColor: '#DB3022', // Màu của icon khi được focus
        tabBarInactiveTintColor: 'gray', // Màu của icon khi không được focus
        tabBarStyle: { 
          display: 'flex', // Hiển thị tabBar
          height: 70, // Đặt chiều cao của tabBar
        },
        tabBarIconStyle: { 
          marginTop: 5, // Khoảng cách giữa icon và label
        }, 
      })}
    >
      <Tab.Screen name='Shop' component={ShopStack} options={{ headerShown: false }} />
      <Tab.Screen name='Bag' component={BagStack} options={{ headerShown: false }} />
      <Tab.Screen name='Favorite' component={FavStack} options={{ headerShown: false }} />
      <Tab.Screen name='Profile' component={ProfileStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={ShopTab} />
        <Drawer.Screen name='Filter' component={FilterScreen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
