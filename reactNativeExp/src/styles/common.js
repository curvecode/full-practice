import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const commonStyles = StyleSheet.create({
    card: {
        height: 70,
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    category: {
        height: 100,
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 1
    }
})

export default commonStyles;
