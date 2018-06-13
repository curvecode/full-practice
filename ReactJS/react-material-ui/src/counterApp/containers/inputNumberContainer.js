/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { updateNumberChanged } from '../actions/counterAction';
import InputNumberComponent from '../components/inputNumberComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
    inputNumber: state.counterReducer.inputNumber
});

const mapDispatchToProps = (dispatch) => ({
    updateNumberChanged: (num) => dispatch(updateNumberChanged(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumberComponent);
