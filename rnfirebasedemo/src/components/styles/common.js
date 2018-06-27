import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        flexDirection: 'row',
        height: 170,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // elevation: 5,
        padding: 5,
        paddingRight: 10


    },
    thumbnailView: {
        width: 120,
        marginRight: 10,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnail: {
        width: 100,
        height: 90
    },
    detailsView: {
        // flex: 1,
    },

    shipping: {
        position: 'absolute',
        bottom: 10,
        borderWidth: 2,
        borderColor: '#DCDCDC',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 12
    },
    shippingText: {
        fontSize: 13,
        color: '#C0C0C0',
    },
    rating: {
        marginTop: 10
    },
    priceText: {
        marginTop: 5
    }
});

export default styles;
