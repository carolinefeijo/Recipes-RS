import * as F from '../../assets/constants/fonts';
import * as C from '../../assets/constants/colors';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'pink',
    },
    mainContainer: {
        width: '95%',
        height: 120,
        alignItems: 'flex-start',
        borderRadius: 5,
        justifyContent:'center',
        backgroundColor: '#F3F3F3',
        marginTop: 20,
    },
    mainImg: {
        backgroundColor: 'blue',
        width:'35%',
        height: 120
    },
    img: {
        borderRadius: 10 
    }

});
export default styles;