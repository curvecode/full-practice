/*jshint esversion: 6 */
import { connect } from 'react-redux';
import TotalComponent from '../components/totalComponent';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
});

export default connect(mapStateToProps)(TotalComponent);