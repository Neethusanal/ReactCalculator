import { useReducer } from 'react';
import './style.css'
import Digitbutton from './Digitbutton';
import Operationbutton from './Operationbutton';
export const ACTIONS={
    ADD_DIGIT:'add-digit',
    CHOOSE_OPERATION:'choose-operation',
    CLEAR:'clear',
    DELETE_DIGIT:'delete-digit',
    EVALUATE:'evaluate'
}
function reducer(state,{type,payload})
{
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return{
        ...state,
        currentoperand:`${currentoperand|| ""}${payload.digit}`
      }
  }
}

function App() {
  const [{currentoperand,previousoperand,operation},dispatch]=useReducer()
  dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:1}})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousoperand}{operation}</div>
        <div className="current-operand">{currentoperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <Operationbutton digit="/"dispatch={dispatch}/>
      
      <Digitbutton digit="1"dispatch={dispatch}/>
      <Digitbutton digit="2"dispatch={dispatch}/>
      <Digitbutton digit="3"dispatch={dispatch}/>
      <Operationbutton digit="*"dispatch={dispatch}/>
     
      <Digitbutton digit="4"dispatch={dispatch}/>
      <Digitbutton digit="5"dispatch={dispatch}/>
      <Digitbutton digit="6"dispatch={dispatch}/>
      <Operationbutton digit="+"dispatch={dispatch}/>
      <Digitbutton digit="7"dispatch={dispatch}/>
      <Digitbutton digit="8"dispatch={dispatch}/>
      <Digitbutton digit="9"dispatch={dispatch}/>
      <Operationbutton digit="-"dispatch={dispatch}/>
      <Digitbutton digit="."dispatch={dispatch}/>
      <Digitbutton digit="0"dispatch={dispatch}/>
      <button className="span-two">=</button>

      
    </div>
  );
}

export default App;
