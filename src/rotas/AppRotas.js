import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native'

 
import { Ionicons } from '@expo/vector-icons';


import Formulario from '../componentes/Formulario';
import Inicio from '../componentes/Inicio';

const Tab = createBottomTabNavigator();
 

export default function AppRotas() {
    return (
        <NavigationContainer>
             <Tab.Navigator>
        <Tab.Screen
          name='Usuários'
          component={Inicio}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Formulario}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='mail' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
        </NavigationContainer>
    );
};

const tabBarOptions = {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    labelStyle: { fontSize: 16 },
    style: { backgroundColor: 'white' },
};

const styles = StyleSheet.create({
    navigator: {
        borderTopWidth: 1,
        borderTopColor: 'gray',
    },
});
