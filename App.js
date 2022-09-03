import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import Api from './components/api'

export default function App() {
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState("");
  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,time,forecast,max,min,date,description&key=13ada48a&city_name=${cidade},SP`);
    setDados(response.data);
    console.log("Sucesso!!");
  }
  return (
    <View>
      <View style={styles.header}>
        <Header 
          input={
              <TextInput
                style={styles.input}
                onChangeText={setCidade}
              />
          }
          onClick={() =>{buscaCep()}}
    ></Header>
      </View>
      <View style={styles.body}>
        <Body data={dados}></Body>
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
  },
  input:{
    width:Dimensions.get('window').width / 1.6,
    height: Dimensions.get('window').height / 15
  }
});
