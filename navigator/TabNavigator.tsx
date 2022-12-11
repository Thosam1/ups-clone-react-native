/* rnfe - TabNavigator has 2 tabs: Customers and Orders -> can be changed in the bottom of the screen */
import React, { useLayoutEffect } from 'react'

// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';

// screens
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';

// type definitions
export type TabStackParamList = {
    // will check if the names param are correct
    Customers: undefined;
    Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {

    // removing the "Main" header from the RootNavigator
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator