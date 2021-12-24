import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as couterActions from '../store/actions/counter.actions';

function Counter ({count, increment, decrement, increment_async}) {
    return <div>
      <button onClick={() => increment(20)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(5)}>-</button>
    </div>
}

const mapStateToProps = state => state.counter;
const mapDispatchToProps = dispatch => bindActionCreators(couterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);