import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.background}>
        <Header></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems:'center',
  },
});
