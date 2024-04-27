import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text, View,props } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Navigator from './navigation/Navigation';





// Stack Screen

// const HomeScreen = (props) => (
//   <View style={styles.container}>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week3Ex1')}>
//       <Text style={styles.buttonText}>Week 3 Ex 1</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week3Ex2')}>
//       <Text style={styles.buttonText}>Week 3 Ex 2</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week3Ex3')}>
//       <Text style={styles.buttonText}>Week 3 Ex 3</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week3Ex4')}>
//       <Text style={styles.buttonText}>Week 3 Ex 4</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week4Ex1')}>
//       <Text style={styles.buttonText}>Week 4 Ex 1</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week4Ex2')}>
//       <Text style={styles.buttonText}>Week 4 Ex 2</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week5Ex1')}>
//       <Text style={styles.buttonText}>Week 5 Ex 1</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.button}
//       onPress={() => props.navigation.navigate('Week5Ex2')}>
//       <Text style={styles.buttonText}>Week 5 Ex 2</Text>
//     </TouchableOpacity>
//   </View>
// );


// Stack screen 
const Stack = createStackNavigator();

// Tab Screen
// const Tab = createBottomTabNavigator();

// Drawer Screen 
// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <Navigator />
    // Stack Screen
    // <Provider store={store}>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='HomeScreen' component={HomeScreen}  />
    //     {/* Week3 */}
    //     <Stack.Screen name='AllWeek3' component={AllWeek3} />
    //     <Stack.Screen name='Week3Ex1' component={Week3Ex1} />
    //     <Stack.Screen name='Week3Ex2' component={Week3Ex2} />
    //     <Stack.Screen name='Week3Ex3' component={Week3Ex3} />
    //     <Stack.Screen name='Week3Ex4' component={Week3Ex4} />


    //     {/* Week4 */}
    //     <Stack.Screen name='AllWeek4' component={AllWeek4} />
    //     <Stack.Screen name='Week4Ex1' component={Week4Ex1} />
    //     <Stack.Screen name='Week4Ex2' component={Week4Ex2} />
    //     <Stack.Screen name='Week4Ex3' component={Week4Ex3} />
    //     <Stack.Screen name='Week4Ex3Part2' component={Week4Ex3Part2} />
    //     <Stack.Screen name='Week4Ex4' component={Week4Ex4} />
    //     <Stack.Screen name='Week4Ex5' component={Week4Ex5} />

    //     {/* Week5 */}
    //     <Stack.Screen name='AllWeek5' component={AllWeek5} />
    //     <Stack.Screen name='Week5Ex1' component={Week5Ex1} />
    //     <Stack.Screen name='Week5Ex2' component={Week5Ex2} />

    //     {/* Week 6 */}
    //     <Stack.Screen name='AllWeek6' component={AllWeek6} />
    //     <Stack.Screen name='ManHinhChinh' component={ManHinhChinh} />
    //     <Stack.Screen name='ManHinhChinh2' component={ManHinhChinh2} />
    //     <Stack.Screen name='ManHinhChinh3' component={ManHinhChinh3} />
    //     <Stack.Screen name='HistoryScreen' component={HistoryScreen}/>
    //     <Stack.Screen name='QuestionScreen' component={QuestionScreen}/>
    //     <Stack.Screen name='CorrectScreen' component={CorrectScreen}/> 
    //     <Stack.Screen name='WrongScreen' component={WrongScreen}/> 


    //     <Stack.Screen name='HomeScreen7' component={HomeScreen7} />
    //     <Stack.Screen name='Product' component={ProductsScreen} />
    //     <Stack.Screen name='Detail' component={DetailScreen} />


    //   </Stack.Navigator>
    // </NavigationContainer>
    // </Provider>
    <Navigator/>

    // TAB SCreen

    // <NavigationContainer>
    //   <Tab.Navigator screenOptions={(props) => ({
    //     tabBarIcon: ({focused, color, size}) => {
    //       var iconName;
    //       if (props.route.name ==='Week5Ex1') {
    //         iconName = focused ? 'home' : 'home-outline'
    //       }
    //       if (props.route.name ==='Week5Ex2') {
    //         iconName = focused ? 'gift' : 'gift-outline'
    //       }
    //       if (props.route.name ==='Week4Ex2') {
    //         iconName = focused ? 'lock-closed-outline' : 'lock-open-outline'
    //       }
    //       return <Ionicons name={iconName} size={size} color={color}/>
    //     }
    //   })}>
    //     <Tab.Screen name = 'Week5Ex1' component={Week5Ex1}/>
    //     <Tab.Screen name = 'Week5Ex2' component={Week5Ex2}/>
    //     <Tab.Screen name = 'Week4Ex2' component={Week4Ex2}/>

    //   </Tab.Navigator>
    // </NavigationContainer>


    // Drawer screen 
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName='Home'>
    //     <Drawer.Screen name='Week5Ex1' component={Week5Ex1} />
    //     <Drawer.Screen name ='Week5Ex2' component={Week5Ex2}/>
    //     <Drawer.Screen name = 'Week4Ex2' component={Week4Ex2}/>
    //   </Drawer.Navigator>
    // </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default App;
