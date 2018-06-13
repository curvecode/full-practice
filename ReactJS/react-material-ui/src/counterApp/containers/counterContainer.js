/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { addNumber, minusNumber } from '../actions/counterAction';
import CounterComponent from '../components/counterComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
    inputNumber: state.counterReducer.inputNumber
});

const mapDispatchToProps = (dispatch) => ({
    addNumber: (num) => dispatch(addNumber(num)),
    minusNumber: (num) => dispatch(minusNumber(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
