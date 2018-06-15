/*jshint esversion: 6 */
import { connect } from 'react-redux';
import { addNumber } from '../actions/counterAction';
import { addCounter } from '../actions/totalAction';
import TotalComponent from '../components/totalComponent';

const mapStateToProps = (state) => ({
    total: state.totalReducer.total,
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    addCounter: (num) => dispatch(addCounter(num)),
    addNumber: (num) => dispatch(addNumber(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalComponent);