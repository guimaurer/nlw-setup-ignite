import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/loading';

export default function App() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold, 
    Inter_800ExtraBold
  })

  if (!fontsLoader) {
    return(
      <Loading />
    )
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guilherme</Text>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#09090a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Inter_800ExtraBold'
  }
});
