import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
export default props=>{
    return(
        <View style={styles.background}>
            <View style={styles.inputView}>
                {props.input}
            </View>
            <View style={styles.inputIcon}>
                <TouchableOpacity onPress={props.onClick}>
                    <Icon name='search'/>
                </TouchableOpacity>
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
  