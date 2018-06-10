import { connect } from 'react-redux';
import { increaseNum, decreaseNum } from '../Actions/counterAction';
import CounterComponent from '../Components/counterComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
    increaseNum: (num) => dispatch(increaseNum(num)),
    decreaseNum: (num) => dispatch(decreaseNum(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
