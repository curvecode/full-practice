import { connect } from 'react-redux';
import { addCounter } from '../Actions/totalAction';
import { increaseNum } from '../Actions/counterAction';
import TotalComponent from '../Components/totalComponent';

const mapStateToProps = (state) => {
    console.log(state);
    return({
        total: state.totalReducer.total
    });
} 

const mapDispatchToProps = (dispatch) => ({
    addCounter: (num) => dispatch(addCounter(num)),
    increaseNum: (num) => dispatch(increaseNum(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalComponent);
