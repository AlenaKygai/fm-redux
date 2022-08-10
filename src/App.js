import {connect} from 'react-redux';

function App(props) {
  const {count, step, dispatch} = props;
  const increment = () => {
    const action={type:'INCREMENT'};
    dispatch(action)
  }
  const decrement = () => {
    const action={type:'DECREMENT'};
    dispatch(action)
  }  
  const onChange = ({target:{value}}) => {
    const action={
      type:'SET_STEP',
      newStep: Number(value)
    };
    dispatch(action);
  }
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='number' value={step} onChange={onChange} />
    </div>
  );
}

function mapStateToProps(state){
  return {state};
}
// const withProps = connect(mapStateToProps);
// const componentWithProps = withProps(App);

export default connect(mapStateToProps)(App);
