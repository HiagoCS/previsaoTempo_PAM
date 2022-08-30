import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import Body from './components/body';

export default function App() {
  const [dados, setDados] = useState();
  return (
    <View>
      <View style={styles.header}>
        <Header></Header>
      </View>
      <View style={styles.body}>
        <Body></Body>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    alignItems:'center'
  },
  body:{
    marginTop:Dimensions.get('window').height / 6,
  }
});
