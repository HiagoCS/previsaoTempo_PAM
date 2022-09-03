import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';

export default props=>{
    return(
        <View style={{opacity:props.opacity, fontFamily:'Roboto', flexDirection:'column', alignItems:'center'}}>
            <View style={{marginRight:Dimensions.get('window').width / 2}}>
                <View style={styles.date}>
                    <Text style={styles.dateFont}>{props.data.date}/2022</Text>
                </View>
                <View style={styles.max_min}>
                    <View style={styles.max}>
                        <Text style={styles.maxFont}>Max: {props.data.max}°</Text>
                        <Icon style={styles.maxIcon} size={15} color={'white'} name='north'/>
                    </View>
                    <View style={styles.min}>
                        <Text style={styles.minFont}>Min: {props.data.min}°</Text>
                        <Icon style={styles.minIcon} size={15} color={'white'} name='south'/>
                    </View>
                </View>
                <View style={styles.descrip}>
                    <Text style={styles.descripFont}>{props.data.description}</Text>
                </View>
            </View>
            <View style={styles.rightWindow}>
                <Text style={styles.descripFont}>{props.data.weekday}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    rightWindow:{
        marginLeft:Dimensions.get('window').width / 2,
        position:'relative',
        bottom:30
    },
    centerWindow:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:Dimensions.get('window').height /3
    },
    date:{
        marginLeft:25,
        marginTop:5
    },
    dateFont:{
        fontSize:20,
        fontWeight:'bold',
        color:'#212237',
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    max_min:{
        flexDirection:'row',
        marginLeft:25,
        marginTop:15
    },
    maxFont:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    minFont:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginLeft:20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    descrip:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:25,
        marginTop:20
    },  
    descripFont:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    humidityFont:{
        fontWeight:'bold',
        color:'white',
        fontSize:25,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});