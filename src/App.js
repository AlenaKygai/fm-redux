import {useReducer} from 'react';

function reducer(state,action){
  switch(action.type){
    case 'increment':{
      return {count:state.count+1}
    }
    case 'decrement':{
      return {count:state.count-1}
    }   
    default: return state;
  }
}

function App() {
  const [{count}, dispatch] = useReducer(reducer,{count:0});
  const increment = () =>{
    dispatch({type:'increment'})
  }
  const decrement = () =>{
    dispatch({type:'decrement'})
  }
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
