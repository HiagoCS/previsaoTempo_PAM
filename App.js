import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import OtherDay from './components/body_od';
import Api from './components/api'
let format_data = {
    'atual':{
      isGet: false,
      city_name:"",
      temp:"",
      date:"",
      time:"",
      max:"",
      min:"",
      description:"",
      humidity:""
    },
    'amanha':{
      isGet: false,
      date:"",
      max:"",
      min:"",
      description:"",
      weekday:""
    }
}
export default function App() {
  const [cidade, setCidade] = useState("");
  const [dados_atual, setDadosAtual] = useState("");
  const [dados_amanha, setDadosAmanha] = useState("");
  async function buscaCep(){
    const response = await Api.get(`weather?array_limit=8&fields=only_results,temp,city_name,time,forecast,max,min,date,description,humidity,weekday,condition&key=2eff37e6&city_name=${cidade},SP`);
    format_data.atual.city_name = response.data.city_name;
    format_data.atual.temp = response.data.temp;
    format_data.atual.date = response.data.date;
    format_data.atual.time = response.data.time;
    format_data.atual.max = response.data.forecast[0].max;
    format_data.atual.min = response.data.forecast[0].min;
    format_data.atual.description = response.data.description;
    format_data.atual.humidity = response.data.humidity;

    format_data.amanha.date = response.data.forecast[1].date;
    format_data.amanha.max = response.data.forecast[1].max;
    format_data.amanha.min = response.data.forecast[1].min;
    format_data.amanha.description = response.data.forecast[1].description;
    format_data.amanha.weekday = response.data.forecast[1].weekday;

    format_data.atual.isGet = true;
    format_data.amanha.isGet = true;
    setDadosAtual(format_data.atual);
    setDadosAmanha(format_data.amanha);
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
                onSubmitEditing={() =>{buscaCep()}}
              />
          }
          onClick={() =>{buscaCep()}}
    ></Header>
      </View>
      <View style={styles.body}>
          <ScrollView horizontal>
            {
              format_data.atual.isGet &&
              <Body data={dados_atual}></Body>
            }
            {
              format_data.amanha.isGet &&
              <OtherDay data={dados_amanha}></OtherDay>
            }
          </ScrollView>
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
    backgroundColor:'#71ACAF',
    height:Dimensions.get('window').height
  },
  input:{
    width:Dimensions.get('window').width / 1.6,
    height: Dimensions.get('window').height / 15
  }
});
