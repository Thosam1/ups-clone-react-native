import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// tailwind
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json'; 

// navigation
import { NavigationContainer } from '@react-navigation/native';

//components
import CustomersScreen from './screens/CustomersScreen';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>      
        <CustomersScreen />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
