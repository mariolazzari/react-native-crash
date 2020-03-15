import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Ciao ciao</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'darkslateblue',
  },
});

export default App;
