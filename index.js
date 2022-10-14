/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import * as React from 'react';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const RootComponent = function () {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Detail">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
      </Stack.Navigator> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => RootComponent);
