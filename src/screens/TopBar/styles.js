import * as F from '../../assets/constants/fonts';
import * as C from '../../assets/constants/colors';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 30,
    },
    mainTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 30,
        flexDirection: 'row',
    },
    img: {
        width: 30,
        height: 22,
        marginRight: 15,
        borderRadius: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: F.QM,
        fontWeight: '400',
    }
});
export default styles;