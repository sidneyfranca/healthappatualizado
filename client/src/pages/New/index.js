import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Pagina New</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});