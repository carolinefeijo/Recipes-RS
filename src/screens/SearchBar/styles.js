import * as F from '../../assets/constants/fonts';
import * as C from '../../assets/constants/colors';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      alignItems:'center',
    },
    mainContainer: {
        width: '95%',
        height: 35,
        alignItems: 'flex-start',
        borderRadius: 5,
        justifyContent:'center',
        backgroundColor: '#F3F3F3',
        marginTop: 20,
    },
    title: {
      marginLeft: 20,
      fontSize: 13,
      color: C.gray1,
    }
 
});
export default styles;