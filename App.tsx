import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// tailwind
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json'; 

// navigation
import { NavigationContainer } from '@react-navigation/native';

//components
import RootNavigator from './navigator/RootNavigator';

// apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const PRODUCTION = false;
const isProductionURL = PRODUCTION ? "https://stmartin.stepzen.net/api/soft-sponge/__graphql" : "http://localhost:5001/api/soft-sponge";

const client = new ApolloClient({
  uri: isProductionURL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>      
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}