import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text>Ciao ciao</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
