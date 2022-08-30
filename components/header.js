import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import Api from './api';
import Body from './body';

export default props=>{
    const [cidade, setCidade] = useState("Peruibe");
    const [dados, setDados] = useState();
    return(
        <View style={styles.background}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    onChangeText={t =>{setCidade(t)}}
                    
                    onSubmitEditing={async () =>{const resp = await Api.get(`weather?fields=only_results,temp,city_name,time,forecast,max,min,date,description&key=7ab934df&city_name=${cidade}`); setDados(resp.data);}}
                />
            </View>
            <View style={styles.inputIcon}>
                <Icon name='search'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputView:{
        width:Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').height / 15,
        borderRadius:5,
        margin:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    input:{
        width:Dimensions.get('window').width / 1.4,
        height: Dimensions.get('window').height / 15
    },
    inputIcon:{
        position:'absolute',
        left:45,
        top:Dimensions.get('window').height / 15
    },
    background:{
        backgroundColor:'#2bb5a7',
        height:Dimensions.get('window').height / 6,
        width:Dimensions.get('window').width / 1,
        alignItems:'center',
        position:'absolute',
    }
});
  