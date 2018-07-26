import { connect } from 'react-redux';
import { getListProduct, addToCart } from '../Actions/productAction';
import ProductComponent from '../Components/productComponent';

const mapStateToProps = (state) => ({
    products: state.productReducer.products
});

const mapDispatchToProps = (dispatch) => ({
    getListProduct: () => dispatch(getListProduct()),
    addToCart: () => dispatch(addToCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);