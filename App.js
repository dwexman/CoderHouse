import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App de Denise Wexman</Text>
      <Text style={styles.secondaryText}>Mi primera app mobile usando React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Tamaño de fuente de 24 puntos
    color: 'blue',
  },
  secondaryText: {
    fontSize: 18, 
    color: 'black', 
  },
});
